
  
  declare global {
    interface Window {
      initAutocomplete: () => void;
    }
  }
  window.initAutocomplete = initAutocomplete;
  export {};

  $(document).ready(function() {
    $('.chat_icon').click(function() {
      $('.chat_box').toggleClass('active');
    });
  
    $('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
  });
  