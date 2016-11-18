---
title: Voormezele Bezoeken
layout: page
---

Voormezele, gelegen ten zuiden van de historische stad Ieper, is een klein groen dorp langs de Heuvellandroute, midden een toeristische streek. We hebben er de mooie vijvers van Dikkebus en Zillebeke en het heerlijke, rustige provinciale recreatieoord de "Palingbeek". Ook ligt het in de nabijheid van de Westvlaamse heuvels: Kemmel-, Rode- en Scherpenberg

<div id="map" style="width: 100%; height: 400px"></div>

<ul>
    {% for location in site.data.maps.locations %}
    <li>
        <span onclick="centerMap('{{ location.id }}'')" >{{ location.title }}</span>
    </li>
    {% endfor %}
</ul>

<script>
var markers = {
{% for location in site.data.maps.locations %}'{{ location.id }}': null,{% endfor %}
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
    markers['{{ location.id }}'] = new google.maps.Marker({
        position: vmzCenter,
        map: map
    });
    {% endfor %}

}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key={{ site.data.maps.apiKey }}&callback=initMap" async defer></script>