var get_name = function(name) {
        var new_name = ''
        var pieces = name.split('/')
        while (new_name == '') {
            new_name = pieces.pop()
        }
    return new_name
}

var get_or_create_obj = function(name, array) {
    // checks whether an item exists in an array of objects.
    var ret
    if (name) {
        name = get_name(name)
        array.forEach(function(item) {
            if (item.name === name) {
                ret = item;
            }
        });
        if (!ret) {
                ret = {"name": name, "children": []};
                array.push(ret);
            }
        return ret;
    }
    return null
}

var reformat = function(json) {
    var tree_data = {"name": "root", "children": []};
    json.forEach(function(jsn){
        var obj = get_or_create_obj(jsn.kingdom, tree_data.children)
        var levels = [jsn.phylum, jsn.clss, jsn.order, jsn.family, jsn.genus, jsn.specific_epithet]
        levels.forEach(function(level) {
            if (obj) {
                obj = get_or_create_obj(level, obj.children)
            }
        });
    });
    return tree_data;
}

$(document).ready(function(){
    url = "http://ecoengine.berkeley.edu/api/observations/?record=bigcb:specieslist&fields=record,url,kingdom,phylum,clss,order,family,genus,specific_epithet&page_size=0"
    d3.json(url, function(json) {
        console.log(json)
        root = reformat(json);
        console.log(root)
        root.x0 = h / 2;
        root.y0 = 0;

        function toggleAll(d) {
            if (d.children) {
                d.children.forEach(toggleAll);
                toggle(d);
            }
        }

        // Initialize the display to show a few nodes.
        root.children.forEach(toggleAll);
        // toggle(root[0]);
        // toggle(root[0].children[0]);

        update(root);
      }
    );
})
