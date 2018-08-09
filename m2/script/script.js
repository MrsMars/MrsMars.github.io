var elId;

function setId(id) {
    
    elId = +id - 1;
    
    var block = document.getElementsByClassName("news-item")[elId],
        blockH = document.getElementsByClassName('news-panel')[elId],
        blockP = document.getElementsByClassName('news-item-p')[elId],
        blockA = document.getElementsByClassName('title-new-a')[elId],
        blockR = document.getElementsByClassName('item-r')[elId];
    
    block.onmouseenter = function(){
        
        this.style.background = '#f26c4f';
        this.style.borderColor = '#373737';
        
        blockA.style.color = '#fff'; 
        blockH.style.color = '#fff';
        
        if (blockP != undefined)
            blockP.style.color = '#fff'; 
        
        if (blockR != undefined){
            blockR.width = '65px';
            blockR.marginRight = '5px';
            blockR.height = '14px';    
            blockR.style.background = 'url(../img/star-white.png) repeat-x';
        }
    };
};

function delId(id) {
    
    var block = document.getElementsByClassName("news-item")[elId],
        blockH = document.getElementsByClassName('news-panel')[elId],
        blockP = document.getElementsByClassName('news-item-p')[elId],
        blockA = document.getElementsByClassName('title-new-a')[elId],
        blockR = document.getElementsByClassName('item-r')[elId];
    
    block.onmouseleave = function(){
        this.style.background = '#fff';
        this.style.borderColor = '#f26c4f';
        
        blockA.style.color = '#222';
        blockH.style.color = '#8f8f8f';
        
        if (blockP != undefined)
            blockP.style.color = '#8f8f8f'; 
        
        if (blockR != undefined){
            blockR.width = '65px';
            blockR.marginRight = '5px';
            blockR.height = '14px';    
            blockR.style.background = 'url(../img/star.png) repeat-x'; 
        }
    };
};