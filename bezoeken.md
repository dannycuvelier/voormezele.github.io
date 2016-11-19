---
title: Voormezele Bezoeken
layout: page
---

Voormezele, gelegen ten zuiden van de historische stad Ieper, is een klein groen dorp langs de Heuvellandroute, midden een toeristische streek. We hebben er de mooie vijvers van Dikkebus en Zillebeke en het heerlijke, rustige provinciale recreatieoord de "Palingbeek". Ook ligt het in de nabijheid van de Westvlaamse heuvels: Kemmel-, Rode- en Scherpenberg

<div id="map" style="width: 100%; height: 400px; margin-bottom: 50px"></div>

{% for location in site.data.maps.locations %}
<h4 data-id="{{ location.id  }}">{{ location.title }}</h4>
<p>{{ location.description }}</p>
{% endfor %}


<script>
var info = {
{% for location in site.data.maps.locations %}
    '{{ location.id }}': {
        marker: null,
        title: '{{ location.title }}',
        description: '{{ location.description }}'
    },
{% endfor %}
    _: null
};

function initMap () {
    var vmzCenter = { lat: 50.8165734, lng: 2.8670502 };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: vmzCenter,
        scrollwheel: false,
        zoom: 14
    });

    {% for location in site.data.maps.locations %}
    info['{{ location.id }}'].marker = new google.maps.Marker({
        position: { lat: {{ location.latlng.lat }}, lng: {{ location.latlng.lng }} },
        map: map
    });

    info['{{ location.id }}'].marker.addListener('click', function () {
        showInfo('{{ location.id }}', info['{{ location.id }}'].marker);
    });
    {% endfor %}

    var locations = document.getElementsByTagName('h4');
    for (var i = 0; i < locations.length; i++) {
        addAnimations(locations[i]);
    }
}

function showInfo(locationId) {

    var locationInfo = info[locationId];
    var infoWindow = new google.maps.InfoWindow({
          content: '<strong>' + locationInfo.title + '</strong>' +
          '<p>' + locationInfo.description + '</p>'
    });

    infoWindow.open(map, locationInfo.marker);
}

function addAnimations (element) {
    var locationId = element.getAttribute('data-id');
    var marker = info[locationId].marker;

    element.addEventListener('mouseover', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    element.addEventListener('mouseout', function () {
        marker.setAnimation(null);
    });


}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key={{ site.data.maps.apiKey }}&callback=initMap" async defer></script>