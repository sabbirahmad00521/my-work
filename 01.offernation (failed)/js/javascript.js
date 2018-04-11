var OpenedWin;
var divs = 0;
function openWindow(URL,w,h,atEnd)
{
	if(!/\?/.test(URL))
	{
		URL = URL+'?';
	}

	if(!atEnd) { atEnd = ''; }

	OpenedWin = window.open(URL+atEnd+'', 'window'+w+h+'', 'width='+w+',height='+h+',top='+(screen.height-h)/2+',left='+(screen.width-w)/2+',screenX='+(screen.width-w)/2+',screenY='+(screen.height-h)/2+',location=0,directories=0,status=no,menuBar=no,scrollBars=yes,resizable=1');
	OpenedWin.focus();
}
function multAddAll(form)
{
	from = document.getElementById(form+'F');
	to = document.getElementById(form+'T');
	
	for (i=0;i<from.options.length;i++)
		to.options[i] = new Option(from.options[i].text,from.options[i].value);
		
	document.getElementById(form+'AddAll').disabled = true;
	document.getElementById(form+'Add').disabled = true;
	document.getElementById(form+'All').value = 1;
	multHidden(form);
}
function multAdd(form)
{
	from = document.getElementById(form+'F');
	to = document.getElementById(form+'T');
	i = from.selectedIndex;

	if(i==-1)
		return;
		
	option = from.options[i];
		
	for(i=0;i<to.options.length;i++)
		if(to.options[i].value==option.value)
			return;

	to.options[to.options.length] = new Option(option.text,option.value);
	multSort(to);
	multHidden(form);
}
function multSort(to)
{
	temp = new Array();
	for(i=0;i<to.options.length;i++)
	{
		temp[i] = to.options[i];
	}
		
	temp.sort(function multComp(opt1,opt2) { return opt1.value < opt2.value?-1:(opt1.value > opt2.value?1:0);});
	
	for(i=0;i<temp.length;i++)
		to.options[i] =  new Option(temp[i].text,temp[i].value);
}
function multRem(form)
{
	to = document.getElementById(form+'T');
	i = to.selectedIndex;

	if(i==-1)
		return;

	to.options[i] = null;
	document.getElementById(form+'AddAll').disabled = false;
	document.getElementById(form+'Add').disabled = false;
	document.getElementById(form+'All').value = 0;
	multHidden(form);
}
function multRemAll(form)
{
	to = document.getElementById(form+'T');

	to.options.length = null;
	document.getElementById(form+'AddAll').disabled = false; 
	document.getElementById(form+'Add').disabled = false;
	document.getElementById(form+'All').value = 0;
	multHidden(form);
}
function multHidden(form)
{
	to = document.getElementById(form+'T');
	hidden = document.getElementById(form+'H');

	hidden.value = '';
	for(i=0;i<to.options.length;i++)
		hidden.value += '||'+to.options[i].value;
}
function checkAll(checkbox)
{
	var field = document.getElementsByName(checkbox);
	for (i = 0; i < field.length; i++)
	{
		if(!field[i].disabled)
			field[i].checked = true ;
	}

}
function uncheckAll(checkbox)
{
	var field = document.getElementsByName(checkbox);
	for (i = 0; i < field.length; i++)
	{
		field[i].checked = false ;
	}
}
function hideByID(element)
{
	document.getElementById(element).style.display = 'none';
}
function showByID(element)
{
	document.getElementById(element).style.display = '';
}