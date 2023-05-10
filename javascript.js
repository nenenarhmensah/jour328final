var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Democrat', 'Republican', 'Other'],
        datasets: [{
            label: 'Number of bills',
            data: [42, 7, 6],
            backgroundColor: [
                '#EAAA00'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Political Breakdown of Representatives Who Passed Bills',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Democrats passed the majority of education bills in the most recent legislative session.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

//Bar Chart 2
var ctx = document.getElementById('myChartMultiple').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Senator King (D)', 'Delegate Smith (D)', 'Senator Guzzone (D)', 'Senator Hersey (R)', 'Senator Kramer (D)', 'Delegate Lewis, J (D)'],
        datasets: [{
            label: 'Number of bills',
            data: [5, 3, 2, 2, 2, 2],
            backgroundColor: [
                '#9400D3'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Legislature members who passed multiple bills',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'State Senator Nancy King passed more education bills than any other assembly member. She passed bills related to libraries, early childhood education, and higher ed'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});

//Polar Chart
var ctx = document.getElementById('myChartPolar').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Altering',
              'Requiring',
              'Prohibiting',
              'Authorizing',
              'Establishing',
              'Providing',
              'Repealing',
              'Exempting',
              'Specifying',
              'Abolishing',
              'Increase'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [17, 12, 7, 5, 5, 3, 3, 2, 2, 1, 1],
              backgroundColor: [
                'rgb(255, 205, 86)',
                'red',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'orange',
                'purple',
                'indigo',
                '#ff726f',
                'pink',
                'orange', 
                'yellow'               
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'The language of education bills',
                font: {size: 18} 
              },
              subtitle: {
                display: true,
                text: 'The number of bills that featured categorized by the language in them. Most of the bills passed altered current legislation.'
            }
            }
          }
        });