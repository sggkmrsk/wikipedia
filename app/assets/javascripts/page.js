$(function(){

  function buildEditHTML(content){
      var html = `<form enctype="multipart/form-data" action="/pages/${content.page_id}/contents/${content.id}" accept-charset="UTF-8" method="post">
                  <input name="utf8" type="hidden" value="✓">
                  <input type="hidden" name="_method" value="patch">
                  <input type="hidden" name="authenticity_token" value="HQCmH6DIvZS/hZhibpoD4nO0A5kKn0DWdMaHHHinJWq9BYBRdB0bqqTgAorN6SzAcal8Hyu5PC5aCfyErxaMxg==">
                  <input placeholder="${content.topic}" class="edit__topic" type="text" value="${content.topic}" name="content[topic]" id="content_topic">
                  <textarea placeholder="${content.body}" class="edit__body" name="content[body]" id="content_body" cols="115" rows="20">${content.body}</textarea>
                  <label class="edit__image" for="content_image">ファイルを選択
                  <input class="edit__image--hidden" type="file" name="content[image]" id="content_image">
                  </label><label for="content_sort"><input placeholder="${content.sort}" class="edit__sort" type="number" value="${content.sort}" name="content[sort]" id="content_sort">
                  番目に表示
                  </label><input type="submit" name="commit" value="UPDATE" class="edit__update-btn" data-disable-with="UPDATE">
                  </form>`;
      return html;
  }
  function buildNewHTML(content,id){
    var html = `<div class:"new">
                <form enctype="multipart/form-data" action="/pages/${id}/contents" accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="✓">
                <input type="hidden" name="authenticity_token" value="/jsMXj8mjRxXmiHWj1vRPwRM2cEVBRbc7EIAg8adXJ9ePioQ6/MrIkz/uz4sKP4dBlGmRzQjaiTCjXsbESz1Mw==">
                <input placeholder="トピックスを入力" class="new__topic" type="text" name="content[topic]" id="content_topic">
                <textarea placeholder="内容を入力して下さい" class="new__body" name="content[body]" id="content_body" cols="115" rows="15"></textarea>
                <label class="new__image" for="content_image">
                ファイルを選択
                <input placeholder="" class="new__image--hidden" type="file" name="content[image]" id="content_image">
                </label><label for="content_sort"><input placeholder="" class="new__sort" type="number" value=${content.sort} name="content[sort]" id="content_sort">
                番目に表示
                </label>
                <input type="submit" name="commit" value="SEND" class="new__create-btn" data-disable-with="SEND">
                </form>
                </div>`;
    return html;
}


  $(document).on('click', '.page__contents__content__topic--edit-btn',function(e){
    e.preventDefault()
    const pageId = $(this).attr("data-page-id")
    const contentId = $(this).attr("data-content-id")
    const url = $(this).attr("href")
    $.ajax({
      type: "GET",
      url: url,
      data: { page_id: pageId,id:contentId},
      dataType: "json"
    })
    .done(function(content) {
      var html = buildEditHTML(content);
      var content_id = "#content" + content.sort
      $(content_id).replaceWith(html)
    })
    .fail(function() {
      alert("通信エラーです。通信状況を確認して下さい");
    });
  })

  $(document).on('click', '.page__contents__add-btn',function(e){
    e.preventDefault()
    const pageId = $(this).attr("data-page-id")
    const url = $(this).attr("href")
    $.ajax({
      type: "GET",
      url: url,
      data: { page_id: pageId},
      dataType: "json"
    })
    .done(function(content) {
      var id = $(".page__contents__add-btn").attr("data-page-id")
      var html = buildNewHTML(content,id);
      $(".page__contents__add-btn").replaceWith(html)
    })
    .fail(function() {
      alert("通信エラーです。通信状況を確認して下さい");
    });
  })
});