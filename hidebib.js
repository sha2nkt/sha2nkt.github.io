// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByClassName("bib") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    // Try to find the bib div directly by ID first
    var bib = document.getElementById(paperid);
    if (bib && bib.classList.contains('bib')) {
        if (bib.style.display == 'none' || bib.style.display == '') {
            bib.style.display = 'block';
        } else {
            bib.style.display = 'none';
        }
        return;
    }
    
    // Fallback to original method for backwards compatibility
    var paper = document.getElementById(paperid);
    if (paper) {
        var bibElements = paper.getElementsByClassName('bib');
        if (bibElements.length > 0) {
            if (bibElements[0].style.display == 'none' || bibElements[0].style.display == '') {
                bibElements[0].style.display = 'block';
            } else {
                bibElements[0].style.display = 'none';
            }
        }
    }
}

function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   if (block.style.display == 'none') {
    block.style.display = 'block' ;
   } else {
    block.style.display = 'none' ;
   }
}

function hideblock(blockId)
{
   var block = document.getElementById(blockId);
   block.style.display = 'none' ;
}
/*
     FILE ARCHIVED ON 21:14:32 Jul 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:05:28 Jul 10, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 294.788 (3)
  esindex: 0.006
  captures_list: 316.236
  CDXLines.iter: 12.059 (3)
  PetaboxLoader3.datanode: 293.706 (4)
  exclusion.robots: 0.169
  exclusion.robots.policy: 0.157
  RedisCDXSource: 5.26
  PetaboxLoader3.resolve: 124.022
  load_resource: 138.621
*/