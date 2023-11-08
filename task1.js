 birthday=window.prompt('Enter BirthDay in Number');
 date =new Date().getMonth();
 let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
if( birthday>=1 && birthday<=12)
{   
    birthday=month[birthday-1];
    alert(birthday);
}
