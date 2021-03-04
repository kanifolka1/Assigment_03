
    
    for (var x=1; x <= 100; x++){
        if( x % 3 == 0 ){
            document.write("Marko!")
        }
        if( x % 5 == 0 ){
            document.write("Polo!")
        }
        if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
            document.write(x)
        };
    };
    document.write ('<br>');
