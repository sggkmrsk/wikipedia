$(function(){

  function buildTopEditHTML(page,csrf_token){
    if (page.image){
      var html = `<div class="form" id="form_page">
                    <form enctype="multipart/form-data" action="/pages/${page.id}" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓">
                      <input type="hidden" name="_method" value="patch">
                      <input type="hidden" name="authenticity_token" value="${csrf_token}">
                      <input placeholder="${page.title}" class="form__title" type="text" value="${page.title}" name="page[title]" id="page_title">
                      <textarea placeholder="${page.summary}" class="form__summary" name="page[summary]" id="page_summary" cols="115" rows="10">${page.summary}</textarea>
                      <div id="form__image">
                        <label class="form__image" for="page_image">
                          <input class="form__image--hidden" type="file" name="page[image]" id="page_image">
                          <img src="${page.image}" class="form__image--preview">
                          <button class="form__image--clear-btn" id="page-image-clear" type="button">clear</button>
                        </label>
                      </div>
                      <input type="submit" name="commit" value="UPDATE" class="form__update-btn" data-disable-with="UPDATE">
                      <input type="button" value="CANCEL" class="form__cancel-btn">
                    </form>
                  </div>`;
    } else {
      var html = `<div class="form" id="form_page">
                    <form enctype="multipart/form-data" action="/pages/${page.id}" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓">
                      <input type="hidden" name="_method" value="patch">
                      <input type="hidden" name="authenticity_token" value="${csrf_token}">
                      <input placeholder="${page.title}" class="form__title" type="text" value="${page.title}" name="page[title]" id="page_title">
                      <textarea placeholder="${page.summary}" class="form__summary" name="page[summary]" id="page_summary" cols="115" rows="10">${page.summary}</textarea>
                      <div id="form__image">
                        <label class="form__image" for="page_image">
                          <input class="form__image--hidden" type="file" name="page[image]" id="page_image">
                          <div class="form__image--preview">ファイルを選択</div>
                          <button class="form__image--clear-btn" id="page-image-clear" type="button">clear</button>
                        </label>
                      </div>
                      <input type="submit" name="commit" value="UPDATE" class="form__update-btn" data-disable-with="UPDATE">
                      <input type="button" value="CANCEL" class="form__cancel-btn">
                    </form>
                  </div>`;
    }
  return html;
  }

  function buildEditHTML(content,csrf_token){
    if (content.image){
      var html = `<div class="form" id="content${content.sort}">
                    <form enctype="multipart/form-data" action="/pages/${content.page_id}/contents/${content.id}" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓">
                      <input type="hidden" name="_method" value="patch">
                      <input type="hidden" name="authenticity_token" value="${csrf_token}">
                      <input placeholder="${content.topic}" class="form__topic" type="text" value="${content.topic}" name="content[topic]" id="content_topic">
                      <textarea placeholder="${content.body}" class="form__body" name="content[body]" id="content_body" cols="115" rows="15">${content.body}</textarea>
                      <div class="form__image" id="form__image">
                        <label for="content_image">
                          <input class="form__image--hidden" type="file" name="content[image]" id="content_image">
                          <img src="${content.image}" class="form__image--preview">
                          <button class="form__image--clear-btn" id="content-image-clear" type="button">clear</button>
                        </label>
                      </div>
                      <label for="content_sort">
                        <input placeholder="${content.sort}" class="form__sort" type="number" value="${content.sort}" min="1" name="content[sort]" id="content_sort">番目に表示</label>
                      <input type="submit" name="commit" value="UPDATE" class="form__update-btn" data-disable-with="UPDATE">
                    </form>
                    <input type="button" value="CANCEL" class="form__cancel-btn" rel="nofollow" data-method="CANCEL">
                    <button>
                      <a class="form__delete-btn" data-confirm="この項目を削除していいですか？" data-disable-with="処理中..." rel="nofollow" data-method="delete" href="/pages/${content.page_id}/contents/${content.id}">DELETE</a>
                    </button>
                    </div>`;
                                      // <input type="button" value="DELETE" class="form__delete-btn" rel="nofollow" data-method="DELETE">

    } else{
      var html = `<div class="form" id="content${content.sort}">
                    <form enctype="multipart/form-data" action="/pages/${content.page_id}/contents/${content.id}" accept-charset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓">
                      <input type="hidden" name="_method" value="patch">
                      <input type="hidden" name="authenticity_token" value="${csrf_token}">
                      <input placeholder="${content.topic}" class="form__topic" type="text" value="${content.topic}" name="content[topic]" id="content_topic">
                      <textarea placeholder="${content.body}" class="form__body" name="content[body]" id="content_body" cols="115" rows="15">${content.body}</textarea>
                      <div id="form__image">
                        <label class="form__image" for="content_image">
                          <input class="form__image--hidden" type="file" name="content[image]" id="content_image">
                          <div class="form__image--preview">ファイルを選択</div>
                          <button class="form__image--clear-btn" id="content-image-clear" type="button">clear</button>
                        </label>
                     </div>
                      <label for="content_sort">
                        <input placeholder="${content.sort}" class="form__sort" type="number" value="${content.sort}" min="1" name="content[sort]" id="content_sort">番目に表示</label>
                      <input type="submit" name="commit" value="UPDATE" class="form__update-btn" data-disable-with="UPDATE">
                    </form>
                    <input type="button" value="CANCEL" class="form__cancel-btn" rel="nofollow" data-method="CANCEL">
                    <button>
                      <a class="form__delete-btn" data-confirm="この項目を削除していいですか？" data-disable-with="処理中..." rel="nofollow" data-method="delete" href="/pages/${content.page_id}/contents/${content.id}">DELETE</a>
                    </button>
                  </div>`;
                  // <input type="button" value="DELETE" class="form__delete-btn" rel="nofollow" data-method="DELETE">

    }
    return html;
  }
  function buildNewHTML(content,id,csrf_token){
    var html = `<div class="form" id="content_new">
                  <form enctype="multipart/form-data" action="/pages/${id}/contents" accept-charset="UTF-8" method="post">
                    <input name="utf8" type="hidden" value="✓">
                    <input type="hidden" name="authenticity_token" value=${csrf_token}>
                    <input placeholder="トピックスを入力" class="form__topic" type="text" name="content[topic]" id="content_topic">
                    <textarea placeholder="内容を入力して下さい" class="form__body" name="content[body]" id="content_body" cols="115" rows="15"></textarea>
                    <div id="form__image">
                      <label class="form__image" for="content_image">
                        <input class="form__image--hidden" type="file" name="content[image]" id="content_image">
                        <div class="form__image--preview">ファイルを選択</div>
                        <button class="form__image--clear-btn" id="content-image-clear" type="button">clear</button>
                      </label>
                    </div>
                    <label for="content_sort">
                      <input placeholder="" class="form__sort" type="number" value=${content.sort} min="1" max="${content.sort}" name="content[sort]" id="content_sort">
                      番目に表示</label>
                    <input type="submit" name="commit" value="SEND" class="form__create-btn" data-disable-with="SEND">
                    <input type="button" value="DELETE" class="form__cancel-btn" rel="nofollow" data-method="CANCEL">
                  </form>
                </div>`;
    return html;
  }

  function getCsrfToken(csrf_token){
    var metaDiscre = document.head.children;
    var metaLength = metaDiscre.length;
    for(var i = 0;i < metaLength;i++){
      var proper = metaDiscre[i].getAttribute('name');
      if(proper === 'csrf-token'){
        var csrf_token = metaDiscre[i].content;
      }
    };
    return csrf_token;
  }

  $(document).on('click', '.page__top__title--edit-btn',function(e){
    e.preventDefault()
    const pageId = $(this).attr("data-page-id")
    const url = $(this).attr("href")
    $.ajax({
      type: "GET",
      url: url,
      data: { page_id: pageId},
      dataType: "json"
    })
    .done(function(page) {
      var csrf_token = getCsrfToken(csrf_token)
      var html = buildTopEditHTML(page,csrf_token);
      $(".page__top").replaceWith(html)
    })
    .fail(function() {
      alert("通信エラーです。通信状況を確認して下さい");
    });
  })

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
      var csrf_token = getCsrfToken(csrf_token)
      var html = buildEditHTML(content,csrf_token);
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
      var csrf_token = getCsrfToken(csrf_token)
      var id = $(".page__contents__add-btn").attr("data-page-id")
      var html = buildNewHTML(content,id,csrf_token);
      $(".page__contents__add-btn").replaceWith(html)
    })
    .fail(function() {
      alert("通信エラーです。通信状況を確認して下さい");
    });
  })

    function buildClearPageImageHTML(){
      var html = `<div id="form__image">
                    <label class="form__image" for="page_image">
                      <input class="form__image--hidden" type="file" name="page[image]" id="page_image">
                      <div class="form__image--preview">ファイルを選択</div>
                      <button class="form__image--clear-btn" id="page-image-clear" type="button">clear</button>
                    </label>
                  </div>`
      return html;
    }
    function buildClearContentImageHTML(){
      var html = `<div id="form__image">
                    <label class="form__image" for="content_image">
                      <input class="form__image--hidden" type="file" name="content[image]" id="content_image">
                      <div class="form__image--preview">ファイルを選択</div>
                      <button class="form__image--clear-btn" id="content-image-clear" type="button">clear</button>
                    </label>
                  </div>`
      return html;
    }

    $(document).on("click","#page-image-clear",function(){
      var html = buildClearPageImageHTML();
      $("#form__image").replaceWith(html);
    })

    $(document).on("click","#content-image-clear",function(){
      var html = buildClearContentImageHTML();
      $("#form__image").replaceWith(html);
    })

    $(document).on('change','.form__image', 'input[type="file"]', function(e) {
      console.log('success')
      var file = e.target.files[0],
          reader = new FileReader(),
          $preview = $(".form__image--preview");
          t = this;
  
      // 画像ファイル以外の場合は何もしない
      if(file.type.indexOf("image") < 0){
        return false;
      }
  
      // ファイル読み込みが完了した際のイベント登録
      reader.onload = (function(file) {
        return function(e) {
          //既存のプレビューを削除
          $preview.empty();
          console.log('success')
          // .prevewの領域の中にロードした画像を表示するimageタグを追加
          $preview.append($('<img>').attr({
                    src: e.target.result,
                    width: "400px",
                    height:"400px",
                    class: "form__image--preview",
                    title: file.name
                }));
        };
      })(file);
  
      reader.readAsDataURL(file);
    });
});