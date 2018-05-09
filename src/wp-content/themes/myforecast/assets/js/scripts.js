(function ($) {

  $(document).on('click', '#searchFieldButton', function () {

    $('#loading').show();
    $('#info, #notFound').hide();

    var city = $('#searchField').val();
    $('#searchField').val("");

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9d43bd9782314e53b183ef490fb0c885&units=metric',
      type: 'GET',
      data: {
        format: 'json'
      }
    }).done(function (response) {
      $('#loading').hide();
      $('#info').show();

      $('#cityName').html(response.name);
      $('#humidity span').html(response.main.humidity);
      $('#temperature span').html(response.main.temp);
      $('#maxTemperature span').html(response.main.temp_max);
      $('#minTemperature span').html(response.main.temp_min);
    }).fail(function () {
      $('#loading, #data').hide();
      $('#notFound').show();
    });
  });
})(jQuery);
