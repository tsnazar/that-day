$(window).on('load', function() {       
        
        $('#container').removeClass('hidden');
        $('#loader').addClass('hidden'); 

        $('#menu').click(function(){
            if($('#sidebar').hasClass('animate-in')){
        
                $('#sidebar').removeClass('animate-in');
                $('#sidebar').addClass('animate-out');
                // $('#sidebar').addClass('hidden');
                
                
                } else {
                // $('#sidebar').removeClass('hidden');
                $('#sidebar').addClass('animate-in');
                $('#sidebar').removeClass('animate-out');
                
                }
        });

        $('#articles').find('div').find('a').children('div .group').each(function(index){
            var p = $(this).find('p');
            var h = $(this).find('h2');

            if($(this).height()-p.height()<$(this).height()/1.5){
                h.addClass('top-4 lg:top-1/3 lg:group-hover:top-1/3');
                p.addClass('top-16 lg:top-1/2 lg:group-hover:top-1/2');
            } else {
                h.addClass('top-8 lg:top-1/3  lg:group-hover:top-1/3');
                p.addClass('top-1/2 lg:top-1/2  lg:group-hover:top-1/2');
            }

        }); 
});
