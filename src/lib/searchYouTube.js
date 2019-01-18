var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'maxResults': options.max,
      'part': 'snippet, id',
      'q': options.query,
      'type': 'video',
      'key': options.key,
      'videoEmbeddable': 'true'
    },
    contentType: 'application/json',
    success: (data) => (
      callback(data.items)
    ),
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
