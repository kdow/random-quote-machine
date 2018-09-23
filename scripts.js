function getQuote() {
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        $('#author').text(post.title);
        $('#text').html(post.content);
      },
      cache: false
    });
};

$(document).ready(function(){
  getQuote();
  $('#new-quote').on('click', getQuote);
});
