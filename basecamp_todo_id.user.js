// ==UserScript==
// @namespace      de.knuspermagier
// @name           Basecamp Todo ID
// @description    Shows the todo id in basecamp
// @include        https://*.basecamphq.com/*
// @version        1.2
// ==/UserScript==

(function () {
  var items, i, item, link, itemId, span, style, copyLink, label;
  
  items = document.getElementsByTagName("div");

  for(i = 0; i < items.length; i++) {
    item = items[i];
  
    if(item.getAttribute('class') != 'widget list_widget item_wrapper commentable') {
      continue;
    }
  
    itemId = item.getAttribute('record');
  
    if(itemId == null) {
      continue;
    }
  
    span  = document.getElementById('list_17801514_item_' + itemId + '_text');
    style = 'background:#aaa;color:white;border-radius:1em;text-decoration:none;padding:0.2em 1em;font-size:0.8em;margin:0 0.3em;';
    url   = window.location.href.replace(/(projects\/\d+[^\/]+\/).*$/, '$1/todo_items/'+itemId+'/comments');
    id    = 'basecamp-todo-id-extension-'+itemId;
    func  = 'document.getElementById(\"'+id+'\").select();document.execCommand(\"Copy\");'
    
    link  = '<a href="'+url+'" style="'+style+'" id="'+id+'">#'+itemId+'</a>';
    label  = '<span style="'+style+'" id="'+id+'">#'+itemId+'</a>';
    copyLink = '<a style="'+style+'" onclick="'+func+'">&rarr; clipboard</a>'
    span.innerHTML = span.innerHTML+label;
  }

})();
