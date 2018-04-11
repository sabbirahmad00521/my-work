google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(draw_Score_Chart);
google.charts.setOnLoadCallback(draw_Comfort_Chart);
google.charts.setOnLoadCallback(draw_Stability_Chart);
google.charts.setOnLoadCallback(draw_Traction_Chart);
google.charts.setOnLoadCallback(draw_Weight_per_Pair_Size_11_5_Chart);
google.charts.setOnLoadCallback(draw_Water_Resistance_Chart);
google.charts.setOnLoadCallback(draw_Durability_Chart);



function draw_Score_Chart() {

 var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Overall Score (0-100)', { role: 'annotation' }, { role: 'style' } ],
['Salomon Quest 4D II GTX', 79, '79 ', 'opacity: 0.8; color: gray'],
['Vasque St. Elias GTX', 75, '75 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 74, '74 ', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 72, '72 ', 'opacity: 0.8; color: #3366cc'],
['Keen Targhee II Mid', 68, '68 ', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 67, '67 ', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 66, '66 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 64, '64 ', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 62, '62 ', 'opacity: 0.8; color: gray'],
['Vasque Inhaler II GTX', 61, '61 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 60, '60 ', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 48, '48 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Overall Performance Score',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '41.8',
			  maxValue: '79'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};

      var chart = new google.visualization.BarChart(document.getElementById('chart_score_div'));

      chart.draw(data, options);
    }



function draw_Comfort_Chart() {

      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Comfort Rating', { role: 'annotation' }, { role: 'style' } ],
['HOKA ONE ONE Tor Summit Mid WP', 10, '10 ', 'opacity: 0.8; color: #3366cc'],
['Vasque St. Elias GTX', 9, '9 ', 'opacity: 0.8; color: gray'],
['Keen Targhee II Mid', 9, '9 ', 'opacity: 0.8; color: gray'],
['Salomon Quest 4D II GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 6, '6 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 6, '6 ', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 5, '5 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 5, '5 ', 'opacity: 0.8; color: gray'],
['Vasque Inhaler II GTX', 5, '5 ', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 4, '4 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Comfort',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '2.8',
			  maxValue: '10'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Comfort'));
      chart.draw(data, options);
    }



function draw_Stability_Chart() {
      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Stability Rating', { role: 'annotation' }, { role: 'style' } ],
['Salomon Quest 4D II GTX', 10, '10 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 9, '9 ', 'opacity: 0.8; color: gray'],
['Vasque St. Elias GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 8, '8 ', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Vasque Inhaler II GTX', 6, '6 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 6, '6 ', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 6, '6 ', 'opacity: 0.8; color: #3366cc'],
['Keen Targhee II Mid', 5, '5 ', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 3, '3 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Stability',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '1.6',
			  maxValue: '10'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Stability_div'));
      chart.draw(data, options);
    }



function draw_Traction_Chart() {

      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Traction Rating', { role: 'annotation' }, { role: 'style' } ],
['Arc\'teryx Bora2 Mid', 8, '8 ', 'opacity: 0.8; color: gray'],
['Salomon Quest 4D II GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Vasque St. Elias GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 8, '8 ', 'opacity: 0.8; color: gray'],
['Keen Targhee II Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Vasque Inhaler II GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 6, '6 ', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 6, '6 ', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 5, '5 ', 'opacity: 0.8; color: #3366cc'],
['Columbia North Plains II', 5, '5 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Traction',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '4.4',
			  maxValue: '8'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Traction_div'));
      chart.draw(data, options);
    }




function draw_Weight_per_Pair_Size_11_5_Chart() {

      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Weight Per Pair (size 11.5)', { role: 'annotation' }, { role: 'style' } ],
['Vasque St. Elias GTX', 3.43, '3.43 lbs', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 3.43, '3.43 lbs', 'opacity: 0.8; color: gray'],
['Salomon Quest 4D II GTX', 3.24, '3.24 lbs', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 3.09, '3.09 lbs', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 2.94, '2.94 lbs', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 2.6, '2.6 lbs', 'opacity: 0.8; color: gray'],
['Keen Targhee II Mid', 2.51, '2.51 lbs', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 2.49, '2.49 lbs', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 2.43, '2.43 lbs', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 2.19, '2.19 lbs', 'opacity: 0.8; color: #3366cc'],
['Vasque Inhaler II GTX', 2.18, '2.18 lbs', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 2.06, '2.06 lbs', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Weight Per Pair (Size 11.5)',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '1.786',
			  maxValue: '3.43'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Weight_per_Pair_Size_11_5_div'));
      chart.draw(data, options);
    }



function draw_Water_Resistance_Chart() {

      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Water Resistance Rating', { role: 'annotation' }, { role: 'style' } ],
['Salomon Quest 4D II GTX', 9, '9 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 9, '9 ', 'opacity: 0.8; color: gray'],
['Vasque St. Elias GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Salewa Mountain Trainer Mid GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Lowa Tiago GTX Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 6, '6 ', 'opacity: 0.8; color: gray'],
['Keen Targhee II Mid', 5, '5 ', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 5, '5 ', 'opacity: 0.8; color: #3366cc'],
['Vasque Inhaler II GTX', 5, '5 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 4, '4 ', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 3, '3 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Water Resistance',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '1.8',
			  maxValue: '9'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Water_Resistance_div'));
      chart.draw(data, options);
    }


function draw_Durability_Chart() {

      var data = new google.visualization.arrayToDataTable([
	  ['Product', 'Durability Rating', { role: 'annotation' }, { role: 'style' } ],
['Salewa Mountain Trainer Mid GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Vasque St. Elias GTX', 8, '8 ', 'opacity: 0.8; color: gray'],
['Salomon Quest 4D II GTX', 7, '7 ', 'opacity: 0.8; color: gray'],
['Asolo Jumla GV', 7, '7 ', 'opacity: 0.8; color: gray'],
['Lowa Renegade GTX Mid', 7, '7 ', 'opacity: 0.8; color: gray'],
['HOKA ONE ONE Tor Summit Mid WP', 6, '6 ', 'opacity: 0.8; color: #3366cc'],
['Lowa Tiago GTX Mid', 6, '6 ', 'opacity: 0.8; color: gray'],
['Arc\'teryx Bora2 Mid', 5, '5 ', 'opacity: 0.8; color: gray'],
['Columbia North Plains II', 5, '5 ', 'opacity: 0.8; color: gray'],
['Vasque Inhaler II GTX', 5, '5 ', 'opacity: 0.8; color: gray'],
['Keen Targhee II Mid', 5, '5 ', 'opacity: 0.8; color: gray'],
['Merrell Capra Venture Mid GTX', 3, '3 ', 'opacity: 0.8; color: gray']
]);
        var options = {
		  title:'Durability',
		  width: '100%',
		  height: 460,
		  chartArea: {'width':'55%', 'height': '85%'},
		  fontName: 'Open Sans',
		  bar: {groupWidth: '70%'},
		  hAxis: {title: '', 
			  titlePosition: '',
			  minValue: '2',
			  maxValue: '8'},
		  vAxis: {title: '', 
			  titleTextStyle: {color: '#5c5c5c'},
			  titlePosition: 'out'},
		  legend: 'none',
		  titleTextStyle: {
			  color: '#333',
			  fontName: 'Roboto Slab',
			  fontWeight: '700',
			  fontSize: '32px'}
		};
      // Instantiate and draw the chart.
      var chart = new google.visualization.BarChart(document.getElementById('chart_Durability_div'));
      chart.draw(data, options);
    }









//FACNYBOX
$(document).ready(function() {
			$('.fancybox').fancybox({
				openEffect : 'fade',			
				closeEffect: 'fade',				
				prevEffect : 'fade',
				nextEffect : 'fade',
				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background-color' : '#666'	
						}
					}
				}
			});							   	   
	});




 $(function() {
    $('img.lazy').lazyload({
		event : 'delaylazyload'
	});
});
$(window).bind('load', function() {
    var timeout = setTimeout(function() { $('img.lazy').trigger('delaylazyload') }, 300);
});





$(window).resize(function() {
    draw_Score_Chart();
    draw_Comfort_Chart();
    draw_Stability_Chart();
    draw_Traction_Chart();
    draw_Weight_per_Pair_Size_11_5_Chart();
    draw_Water_Resistance_Chart();
    draw_Durability_Chart();
});