
            var count = 0 ;
            var oprend_1 , oprend_2 ;
            var opreation = 0 ;
            var hash;
            function isValid(val){
                var sCheck ;
                sCheck = document.getElementById("screen").innerHTML
                parseInt(sCheck);                   
                
                if (( sCheck==0) && (val=='/' || val=='*' || val=='+'|| val=='=')){
                        document.getElementById("error").innerHTML = 'Please enter Oprend to preform this Operation' ;                   
                        return false ;
                    }

                    document.getElementById("error").innerHTML = '' ;                   
                    return true ;
            
            }
            function input(val) {
                
                    var temp = document.getElementById("screen").innerHTML;
                if(isValid(val)== true){
            
                    if(count== 0  && val !='ac' && val !='c' && val!='del' ){  
                
                    document.getElementById("screen").innerHTML = val;
                    count++ ;

                     }
                     else if(val=='ac'||val=='c')
                     {
                         document.getElementById("screen").innerHTML = 0;
                        count = 0 ;
                     }
                     else if (val=='del')
                     {
                        num = document.getElementById("screen").innerHTML ;
                        if (num==0){
                            
                        }
                        else{
                            num = parseInt (num/10) ;
                        document.getElementById("screen").innerHTML = num ;
                        }
                        
                     }
                     else if (val == '=')
                     {
                         var expression ;
                         var result ;
                         expression = document.getElementById("screen").innerHTML
                         result= eval(expression);
                         document.getElementById("screen").innerHTML= result ;

                     }
                else{
                    document.getElementById("screen").innerHTML =temp +"" + val;

                }
            }
                
            }
