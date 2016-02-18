
jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );

    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text') {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

$('body').textWalk(function() {
    this.data = this.data.replace('Trump', '[THE CASUAL MUDER OF CRITIQUE]');
    this.data = this.data.replace('The Donald', '[THE CASUAL MUDER OF CRITIQUE]');
    this.data = this.data.replace('Donald Trump', '[THE CASUAL MUDER OF CRITIQUE]');
});
