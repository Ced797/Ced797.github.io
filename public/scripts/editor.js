tinymce.init({
  selector: 'textarea#article',
  plugins: 'a11ychecker advcode casechange export formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker|autolink',
   toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent| h1| h2 | h3|',
  toolbar_mode: 'floating',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name',
});
