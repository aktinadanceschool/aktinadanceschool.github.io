import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "../node_modules/photoswipe/dist/photoswipe-ui-default";

const gallery = document.querySelector(".aktina_gallery");

for(let i=0; i<gallery.children.length; i += 12) {

    let rowStart = i + 1;
    let rowEnd = rowStart + 2
    gallery.children[i].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i].style.gridColumn = "1/3";

    rowStart = i + 1;
    rowEnd = rowStart + 1;
    gallery.children[i + 1].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 1].style.gridColumn = "3/6";

    rowStart = i + 3;
    rowEnd = rowStart + 1;
    gallery.children[i + 2].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 2].style.gridColumn = "1/3";

    rowStart = i + 2;
    rowEnd = rowStart + 2;
    gallery.children[i + 3].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 3].style.gridColumn = "3/5";

    rowStart = i + 2;
    rowEnd = rowStart + 1;
    gallery.children[i + 4].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 4].style.gridColumn = "5/6";

    rowStart = i + 3;
    rowEnd = rowStart + 1;
    gallery.children[i + 5].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 5].style.gridColumn = "5/6";

    rowStart = i + 4;
    rowEnd = rowStart + 1;
    gallery.children[i + 6].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 6].style.gridColumn = "1/4";

    rowStart = i + 4;
    rowEnd = rowStart + 2;
    gallery.children[i + 7].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 7].style.gridColumn = "4/6";

    rowStart = i + 5;
    rowEnd = rowStart + 1;
    gallery.children[i + 8].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 8].style.gridColumn = "1/2";

    rowStart = i + 6;
    rowEnd = rowStart + 1;
    gallery.children[i + 9].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 9].style.gridColumn = "1/2";

    rowStart = i + 5;
    rowEnd = rowStart + 2;
    gallery.children[i + 10].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 10].style.gridColumn = "2/4";

    rowStart = i + 6;
    rowEnd = rowStart + 1;
    gallery.children[i + 11].style.gridRow = rowStart  + "/" + rowEnd;
    gallery.children[i + 11].style.gridColumn = "4/6";
}


var initPhotoSwipeFromDOM = function(gallerySelector) {
    
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
  
        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i];

            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0];

            size = linkEl.getAttribute('data-size').split('x');

            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
 
            if(linkEl.children.length > 0) {
                let lala = "/" + window.getComputedStyle(linkEl.children[0]).getPropertyValue("background-image").split("/")[3];
                item.src = lala.split(`"`)[0];
            } 

            item.el = figureEl;
            items.push(item);
        }

        return items;
    };

    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;
       
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        options = {

            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {

                var thumbnail = items[index].el.getElementsByTagName('div')[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        if(fromURL) {
            if(options.galleryPIDs) {

                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

initPhotoSwipeFromDOM('.aktina_gallery');