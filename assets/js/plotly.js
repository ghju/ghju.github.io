var key_id = {}

key_id['<b>Coupang</b><br>Pricing policy analysis'] = 'coupang_pricing'
key_id['<b>Coupang</b><br>Fee structure optimization'] = 'coupang_fee'
key_id['<b>Coupang</b><br>Seller retention <br>and growth'] = 'coupang_seller'
key_id['<b>Coupang</b><br>KPI development <br>and dashboard design'] = 'coupang_kpi'
coupang_x = [1, 0.8, -0.4, 0.3],
coupang_y = [3.4, 2.2, 1.9, 1.3],
coupang_text = ['<b>Coupang</b><br>Pricing policy analysis', 
        '<b>Coupang</b><br>Fee structure optimization',
        '<b>Coupang</b><br>Seller retention <br>and growth',
        '<b>Coupang</b><br>KPI development <br>and dashboard design']

key_id['<b>Unknot</b><br>Algorithmic trading'] = 'unknot_at'
key_id['<b>Unknot</b><br>Portfolio management'] = 'unknot_pm'
key_id['<b>Unknot</b><br>Trade monitoring system'] = 'unknot_tms'
unknot_x = [-1.4, 0, 1.5],
unknot_y = [3.8, 3.5, 3.3],
unknot_text = ['<b>Unknot</b><br>Algorithmic trading', 
        '<b>Unknot</b><br>Portfolio management',
        '<b>Unknot</b><br>Trade monitoring system']

key_id['<b>Zalando</b><br>Price optimization'] = 'zalando_po'
key_id['<b>Zalando</b><br>Demand forecast &<br> competitive pricing'] = 'zalando_df'
key_id['<b>Zalando</b><br>Product matching'] = 'zalando_pm'
zalando_x = [-0, -1, -1.5],
zalando_y = [2.7, 2.6, 3.5],
zalando_text = ['<b>Zalando</b><br>Price optimization', 
        '<b>Zalando</b><br>Demand forecast &<br> competitive pricing',
        '<b>Zalando</b><br>Product matching']


key_id['<b>Lunit</b><br>AI solution for <br>medical images'] = 'lunit_ai'
lunit_x = [-1.7],
lunit_y = [3.8],
lunit_text = ['<b>Lunit</b><br>AI solution for <br>medical images']

key_id['<b>NHIS</b><br>Pricing engine for <br>financial derivatives'] = 'nh_pricing'
nh_x = [1.7],
nh_y = [3.8],
nh_text = ['<b>NHIS</b><br>Pricing engine for <br>financial derivatives']

var myPlot = document.getElementById('myDiv'),
data = [{x:coupang_x, y:coupang_y, text:coupang_text, 
        hoverlabel: { bgcolor: "rgba(112,198,255,0.3)", align: "left"},
        hovertemplate: "%{text}<extra></extra>",    
        type:'scatter',
         mode:'markers', marker:{size:7, color:'rgba(112,198,255,0.9)'}
        },
        {x:unknot_x, y:unknot_y, text:unknot_text, 
            hoverlabel: { bgcolor: "rgba(51, 204, 51,0.3)", align: "left"},
            hovertemplate: "%{text}<extra></extra>",    
            type:'scatter',
             mode:'markers', marker:{size:7, color:'rgba(51, 204, 51,0.9)'}
        },
        {x:zalando_x, y:zalando_y, text:zalando_text, 
            hoverlabel: { bgcolor: "rgba(255, 153, 51,0.3)", align: "left"},
            hovertemplate: "%{text}<extra></extra>",    
            type:'scatter',
                mode:'markers', marker:{size:7, color:'rgba(255, 153, 51,0.9)'}
        },
        {x:lunit_x, y:lunit_y, text:lunit_text, 
            hoverlabel: { bgcolor: "rgba(0, 51, 204,0.3)", align: "left"},
            hovertemplate: "%{text}<extra></extra>",    
            type:'scatter',
                mode:'markers', marker:{size:7, color:'rgba(0, 51, 204,0.9)'}
        },
        {x:nh_x, y:nh_y, text:nh_text, 
            hoverlabel: { bgcolor: "rgba(255, 255, 50,0.3)", align: "left"},
            hovertemplate: "%{text}<extra></extra>",    
            type:'scatter',
                mode:'markers', marker:{size:7, color:'rgba(255, 255, 50,0.9)'}
        }],
layout = {width: 270, 
        height: 270,
        pad: 0,
        hovermode:'closest',
        showlegend:false,
          title: {text: 'Click on Points', font:{color:'rgba(255,255,255,1)'}},
          paper_bgcolor: 'rgba(0,0,0,0)', 
          plot_bgcolor: 'rgba(0,0,0,0.)',
          xaxis: {
            showaxis:false, 
            zeroline: false,
            showline: false,
            showgrid:false, 
            visible: false,
            showticklabels: false, 
            fixedrange: true,
            range: [-3,3]},
          yaxis: {
            zeroline: false,
            showline: false,
            showgrid:false, 
            visible: false,
            showticklabels: false, 
            fixedrange: true,
            range: [-0.5,5.5]},
          margin: {l:50, r:0, t:0, b:50},
          shapes: [    {
            type: 'path',
            path: 'M -2.5 4.33 L 2.5 4.33 L 0 0 Z',
            fillcolor: 'rgba(0, 0, 0, 0.9)',
            line: {
              color: 'rgba(255, 255, 255, 0.7)'
            },
            layer: 'below'
          },],
          annotations: [
            {
              x: -2.8,
              y: 4.43,
              xref: 'x',
              yref: 'y',
              xanchor: 'left',
              yanchor: 'bottom',
              text: 'ML',
              showarrow: false,
              ax: -20,
              ay: -20,
              font: {
                color: "white",
                size: 14
              },
            },
            {
              x: 2.8,
              y: 4.43,
              xref: 'x',
              yref: 'y',
              xanchor: 'right',
              yanchor: 'bottom',
              text: 'Analytics',
              showarrow: false,
              ax: -20,
              ay: -20,
              font: {
                color: "white",
                size: 14
              },
            },
            {
              x: 0,
              y: -0,
              xref: 'x',
              yref: 'y',
              xanchor: 'center',
              yanchor: 'top',
              text: 'Business',
              showarrow: false,
              ax: -20,
              ay: -20,
              font: {
                color: "white",
                size: 14
              },
            }
          ]

 };
config = {displayModeBar: false}
Plotly.newPlot('myDiv', data, layout, config);
myPlot.on('plotly_click', function(eventdata){
    var compid = key_id[eventdata.points[0]['text']]
    var comp = document.getElementById(compid)
    comp.scrollIntoView({behavior: 'smooth'});
    $(comp).stop().animate({backgroundColor:"rgba(200, 200, 255, 0.6)"}, 300);
    if ($(window).width() > 1300) {
        $(comp).animate({backgroundColor:"rgba(200, 200, 255, 0.3)"}, 300);
    }
    else {
        $(comp).animate({backgroundColor:"rgba(200, 200, 255, 0.0)"}, 3000);
    }
});

myPlot.on('plotly_hover', function(eventdata){
    var compid = key_id[eventdata.points[0]['text']]
    var comp = document.getElementById(compid)
    $(comp).stop().animate({backgroundColor:"rgba(200, 200, 255, 0.3)"}, 200);
    // $(comp).animate({backgroundColor:"rgba(200, 200, 255, 0.0)"}, 3000);
});

 myPlot.on('plotly_unhover', function(eventdata){
    var compid = key_id[eventdata.points[0]['text']]
    var comp = document.getElementById(compid)
    $(comp).stop().animate({backgroundColor:"rgba(200, 200, 255, 0.0)"}, 200);
});