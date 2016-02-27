
jQuery.fn.textWalk = function( fn )
{
    this.contents().each( jwalk );

    function jwalk()
    {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text')
        {
            fn.call( this );
        }
        else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' )
        {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};

$('body').textWalk(function()
{
    var msg = 'the casual murder of critique';
    this.data = this.data.replace('Donald Trump', msg);
    this.data = this.data.replace('Donald J. Trump', msg);
    this.data = this.data.replace('The Donald', msg);
    this.data = this.data.replace('Trump', msg);
    this.data = this.data.replace('Mr Trump\'s', msg);
});
