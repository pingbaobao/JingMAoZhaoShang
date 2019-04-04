
/*
    js公共类库
*/
(function(w) {

    function App() {}
    var head = "";
    App.prototype = {
        init: function() {
            
        },
        navigationColor: function(){
            var oUrl = window.location.href,
                $nav = $("#nav-ul a");
                $icon1 = $("#nav-ul .icon1");
                $icon2 = $("#nav-ul .icon2");
                $icon3 = $("#nav-ul .icon3");
                $icon4 = $("#nav-ul .icon4");
                $icon5 = $("#nav-ul .icon5");
                $icon6 = $("#nav-ul .icon6");
                $icon7 = $("#nav-ul .icon7");
                $icon8 = $("#nav-ul .icon8");
            if(oUrl.indexOf('yxz')>-1){
                $nav.eq(1).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2-h.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('zxb')>-1){
                $nav.eq(2).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3-h.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('other')>-1){
                $nav.eq(3).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4-h.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('bigdata')>-1){
                $nav.eq(4).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5-h.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('service')>-1){
                $nav.eq(5).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6-h.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('price')>-1){
                $nav.eq(6).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7-h.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }else if(oUrl.indexOf('about')>-1){
                $nav.eq(7).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8-h.png)");
            }else{
                $nav.eq(0).addClass('current');
                $icon1.css("background-image", "url(//m.wjkj.com/images/nav-ico1-h.png)");
                $icon2.css("background-image", "url(//m.wjkj.com/images/nav-ico2.png)");
                $icon3.css("background-image", "url(//m.wjkj.com/images/nav-ico3.png)");
                $icon4.css("background-image", "url(//m.wjkj.com/images/nav-ico4.png)");
                $icon5.css("background-image", "url(//m.wjkj.com/images/nav-ico5.png)");
                $icon6.css("background-image", "url(//m.wjkj.com/images/nav-ico6.png)");
                $icon7.css("background-image", "url(//m.wjkj.com/images/nav-ico7.png)");
                $icon8.css("background-image", "url(//m.wjkj.com/images/nav-ico8.png)");
            }
        },
        closeApplyForm: function(){
            $("#com_apply_close").click(function(e){
                $("#com_apply_content").hide();
                $("#com_apply_bg").hide();
                $(this).hide();
            });
        },
        openApplyForm: function(){
            $("#apply,#apply2,#apply3").click(function(){
                $("#com_apply_bg").show();
                $("#com_apply_content").show();
                $("#com_apply_close").show();
            })
        },
        appDownLink: function(dom){
            var u = navigator.userAgent;
                isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
                // isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                // urls = {
                //     'android':'https://www.jiajuol.com/app/download/app-guanfang-zxb-release.apk',
                //     'ios':'https://itunes.apple.com/cn/app/id1090348565',
                // }

                if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
                    $(dom).attr('href','https://itunes.apple.com/cn/app/id1090348565')
                }else if(isAndroid){
                    $(dom).attr('href','https://www.jiajuol.com/app/download/app-guanfang-zxb-release.apk')
                }else{
                    $(dom).attr('href','https://www.jiajuol.com/app/download/app-guanfang-zxb-release.apk')
                }
                

        },
        gotoPc:function(){
          // var href_m = window.location.href;
          $('.footer .text-title').click(function(){
            $.cookie('urlRule', 1, {
                domain: "dyrs.com.cn"
            });
          })
        },
        getHead:function(arr,url){
          $.ajax({
            url : '/api/user/user.php?action=logo',
            type : 'get',
            success:function(res){
              head = res.data;
              $(".user-info .flcons").html('<div class="lazy fl"><a href="//m.dyrs.com.cn/home"><img src='+head+' class="lazy_img auto" style="width:40px;height:40px;"></a></div><span style="margin-left: 15px;line-height: 50px;" class="fl">'+arr[1]+'</span>');
              $(".user-info .frcons").html('<span class="login-out text-primary"><a href="/user/user_loginout.php?backurl='+url+'">[退出]</a></span>');
            }
          })
        },
        getPageFormData:function(){
            var _self = this
            $('[data-formValidate]').each(function(i,v){
                var id = $(v).attr('id')
                var errorType = $(v).data('formvalidate')
                if(id){
                    _self.v({
                        id: id,
                        errorType : errorType,
                        callback: function(e, data) {
                            _self.formSubmit(e, data, function(res) {
                                // window.location.href="/"
                            });
                        }
                    })
                }
            })
        },
        imageCase: function(){
            if($('[data-imageList]').length > 0){
                var self = this
                //获取当前屏幕中的图标
                //屏幕中的一些尺寸
                var screenWidth = $(document.body).width()-30
                var spaceWidth = 10//两列中间的空间
                var betWidth = 0//左右两边的空隙
                var lastWidth = (screenWidth-betWidth*2-spaceWidth)/2
                if(!self.msg){
                    self.msg = {
                        height : [0,0],
                        images:[],
                        imgs : {
                            left:[],
                            right:[]
                        }
                    }
                }
                $('[data-scale]').each(function(i,v){
                    var scale = Number($(v).data('scale'))//获取图片的比例
                    var lastHeight = lastWidth / (scale) + 32 + spaceWidth//当前图片块的高度
                    $(v).data('height',lastHeight)
                    var imgMsg = null
                    if(self.msg.height[0] > self.msg.height[1]){
                        var left = spaceWidth + betWidth + lastWidth
                        var top = self.msg.height[1]
                        self.msg.height[1] += lastHeight
                        imgMsg = {
                            big : 'default',
                            small : 'default',
                            width : lastWidth,
                            height : lastWidth / (scale),
                            top : top,
                            left : left,
                            text : 'default',
                            isFavou : 'default',
                            lastFavou : 'default',
                            totalHeight : lastHeight // 图片的高度 + 文字的高度 + 下间距
                        }
                        self.msg.imgs.right.push(imgMsg)
                        $(v).css({
                            width : lastWidth,
                            height:lastHeight - spaceWidth,
                            top:top,
                            left : left
                        })
                        $(v).find('.lazy').css({
                            width : lastWidth,
                            height : lastWidth / (scale)
                        })
                    }else{
                        left = betWidth
                        top = self.msg.height[0]
                        self.msg.height[0] += lastHeight
                        imgMsg = {
                            big : 'default',
                            small : 'default',
                            width : lastWidth,
                            height : lastWidth / (scale),
                            top : top,
                            left : left,
                            text : 'default',
                            lastFavou : 'default',
                            totalHeight : lastHeight // 图片的高度 + 文字的高度 + 下间距
                        }
                        self.msg.imgs.left.push(imgMsg)
                        $(v).css({
                            width : lastWidth,
                            height:lastHeight - spaceWidth,
                            top:top,
                            left : left
                        })
                        $(v).find('.lazy').css({
                            width : lastWidth,
                            height : lastWidth / (scale)
                        })
                    }
                })
                $('[data-imageList]').height(self.msg.height[0]>self.msg.height[1]?self.msg.height[0]:self.msg.height[1])
                if('onImageCaseComplated' in this){
                    $('[data-imageList]').parent().append($('<div id="loadState"></div>'))
                    this.onImageCaseComplated()
                    // $('#loadState').removeClass('loadend')
                    console.log(self.msg.height)
                }
            }
        },
        utf8_decode: function(str_data){
          var tmp_arr = [], i = 0, ac = 0, c1 = 0, c2 = 0, c3 = 0;
          str_data += '';
          while ( i < str_data.length ) {
            c1 = str_data.charCodeAt(i);
            if (c1 < 128) {
              tmp_arr[ac++] = String.fromCharCode(c1);
              i++;
            } else if ((c1 > 191) && (c1 < 224)) {
              c2 = str_data.charCodeAt(i+1);
              tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
              i += 2;
            } else {
              c2 = str_data.charCodeAt(i+1);
              c3 = str_data.charCodeAt(i+2);
              tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
            }
          }
          return tmp_arr.join('');
        },
        base64decode_user: function (data) {
          var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
          if (!data) {
            return data;
          }
          data += '';
          while (i < data.length){
          h1 = b64.indexOf(data.charAt(i++));
          h2 = b64.indexOf(data.charAt(i++));
          h3 = b64.indexOf(data.charAt(i++));
          h4 = b64.indexOf(data.charAt(i++));
          bits = h1<<18 | h2<<12 | h3<<6 | h4;
          o1 = bits>>16 & 0xff;
          o2 = bits>>8 & 0xff;
          o3 = bits & 0xff;
          if (h3 == 64) {
              tmp_arr[ac++] = String.fromCharCode(o1);
          } else if (h4 == 64) {
              tmp_arr[ac++] = String.fromCharCode(o1, o2);
          } else {
              tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
          }
            }

          dec = tmp_arr.join('');
          dec = this.utf8_decode(dec);
          return dec;
        },
        readck: function(name){
            var cookieValue = "";
            var search_s = name + "=";
            if(document.cookie.length > 0)
            {
                var offset = document.cookie.indexOf(search_s);
                if (offset != -1)
                {
                    offset += search_s.length;
                    var end = document.cookie.indexOf(";", offset);
                    if (end == -1) end = document.cookie.length;
                    cookieValue = unescape(document.cookie.substring(offset, end))
                }
            }
            return cookieValue;
        },
        getusercookieValue:function(){
            var cookieValue = this.readck('dyrs_userinfo');
            var cookie_s = this.base64decode_user(cookieValue);
            var arr = cookie_s.split("\t");
            return arr;
        },
        reachBottom : function (options){
            var flag = true // 无限加载控制开关
            var option = {
                template : '',
                html : '',
                url : '',
                type : 'get',
                loadData : {
                    page : 2,
                    page_size: 10,
                    start_num : 0,
                    is_over : false
                },
                ajaxComplate: ""
            }
            option = Object.assign(option,options)
            var that = this;
            var wrapper = $('#wrapper')
            if($('#loadState').length==0||$('#loadState').hasClass('loadend')){

            }else{
                $(window).on('scroll', function() {
                    if(wrapper.is(':hidden')){
                        return
                    }
                    if ($(window).scrollTop() + $(window).height() >= $(document).height()-500||$(window).height() >= $(document).height()) {

                        if($('#loadState').hasClass('loadend')){
                            return
                        }
                        if(flag){
                            flag = false
                            // $('#loadState').addClass('loadend')
                            $.ajax({
                                url : option.url,
                                type : option.type,
                                data:option.loadData,
                                success:function(result){
                                    if(result.status != 1){
                                        layer.open({
                                            content: result.msg || '请求失败',
                                            time:1.5
                                        });
                                        return
                                    }
                                    flag = true
                                    if(option.ajaxComplate.constructor == Function){

                                        var success = option.ajaxComplate(result,{url:option.url,template:option.template,html : option.html})
                                        if(success == '' || success == '{Template Error}'){
                                            flag = false
                                        }

                                    }else{
                                        var html = template(option.template,result)
                                        $(option.html).append(html)
                                    }
                                    // $('#loadState').removeClass('loadend')
                                    if(typeof collect_type != 'undefined'){
                                        that.collectionList(collect_type);
                                    }
                                    option.loadData.page++;
                                    if(option.loadData.page > totalPage){
                                        $('#loadState').addClass('loadend')
                                    }

                                    $('.lazy_img').lazyload(var_lazy);
                                    $(window).scroll();
                                    $(document).trigger('pageIsLoad')
                                },
                                error:function(){
                                    layer.open({
                                        content: '网络请求不正确',
                                        time:1.5
                                    });
                                }
                            })
                        }
                    }
                }).scroll();
            }
        },
        more:function(){
          $('[data-detailText]').click(function(){
            if($(this).find(".iconfont").hasClass("icon-down-trangle")){
              $(this).find(".iconfont").removeClass("icon-down-trangle").addClass("icon-down-trangle-copy-copy");
              $(".common-detail").css("height","70px");
            } else {
              $(this).find(".iconfont").removeClass("icon-down-trangle-copy-copy").addClass("icon-down-trangle");
              $(".common-detail").css("height","auto");
            }
          })
        },
        yuyue: function(obj){
          $(".yy_btn").on("click",function(){
            var phone = $.trim($('.yy_phone').val());
            if(phone == ""){
              layer.open({
                  content: '手机号码不能为空！',
                  time:1.5
              });
              return;
            } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
              layer.open({
                  content: '手机号码格式不正确！',
                  time:1.5
              });
              return;
            }
            var data = $.extend(obj, {'phone': phone})
            var index = layer.open({type: 2,shadeClose:false,shade:'background-color: rgba(0,0,0,.2)'});
            $.ajax({
              url: '/api/user/appoint.php',
              type:'post',
              data:data,
              success: function(res){
                layer.close(index);
                layer.open({
                    content: res.description||'提交成功',
                    time:1.5
                });
                $('.yy_phone').val('');
              }
            })
          })
        },
        // other:function(){
        //     // 放大图配置
        //     var self = this
        //     var fancyboxConfig={
        //         buttons : [
        //             'close'
        //         ],
        //         titleShow : true,
        //         arrows:false,
        //         animationDuration:200,
        //         transitionDuration:200,
        //         hash:false,
        //         infobar:false,
        //         slideShow: {
        //             autoStart: true,
        //             speed: 4000
        //         },
        //         beforeClose:function(){
        //           location.hash='';
        //         },
        //         afterShow : function(instance, current ) {
        //             //预加载图片，前后两张
        //             location.hash='pic'+current.opts.id;

        //             var i = current.index;
        //             if(i>1){
        //                 let img = new Image();
        //                 img.src = instance.group[i-1].src;
        //             }
        //             if(i<instance.group.length-1){
        //                 let img = new Image();
        //                 img.src = instance.group[i+1].src;
        //             }
        //             console.log(instance.group.length)
        //             if(instance.group.length - i <5){
        //                 if ("fancyBoxEnd" in self){
        //                     self.fancyBoxEnd(instance,current)
        //                 }
        //             }
        //             if(typeof fancyboxsAfter != 'undefined'){
        //                 fancyboxsAfter(instance,current)
        //             }
        //         },
        //         btnTpl: {
        //             close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">'+'<i class=\'iconfont icon-fanhui\'></i>'+'</svg>'+'</button>',
        //         }
        //     };
        //     if(typeof fancyboxs!= 'undefined'){
        //         fancyboxs(fancyboxConfig)
        //     }
        //     var isPic = location.href.indexOf('/pic'),
        //         picId = location.hash.match(/\d+/),
        //         picFlag=null;
        //     if(isPic && picId){
        //         $('.photo-lists a').each(function(){
        //             var id = $(this).data('id');
        //             if(id == picId[0]){
        //                 picFlag=true;
        //                 $(this).click();
        //             }
        //         });
        //         if(!picFlag){
        //             $.ajax({
        //                 url: '/api/pic/info',
        //                 data: {
        //                     pic_id:picId[0]
        //                 },
        //                 success:function(res){
        //                     console.log(22222222,res);
        //                     $('.photo-lists').prepend(template('module', res));
        //                     var $lazy_img = $('img.lazy_not');
        //                     $lazy_img.lazyload(var_lazy);
        //                     $(window).scroll();
        //                     $('.photo-lists li').eq(0).find('a').click();
        //                 }
        //             })

        //         }
        //     }

        // },
        // yuyueLayer:function(title,data){
        //     var n = $(window).scrollTop();
        //     var html = `
        //         <div class="yuyueLayer" id="yuyueLayer">
        //             <div class="head">
        //                 <em class="public_meun" id="closeYuyue">
        //                     <i></i>
        //                     <i></i>
        //                     <i></i>
        //                 </em>
        //             </div>
        //             <div class="yuyue bg-white over pdl20 pdr20 pdb50" style="margin:.3rem;">
        //                 <form action="/api/user/appoint.php?${data}" method="get" id="yuyueFormT">
        //                     <div class="tit f22 tc mt30">${title}</div>
        //                     <p class="f12 tc mt5 text-sub">优质家装服务&nbsp;&nbsp;打造美好舒适的家</p>
        //                     <div class="input mt30">
        //                         <input type="text" placeholder="称呼" name="name" validate="required" autocomplete="off">
        //                     </div>
        //                     <div class="input mt15">
        //                         <input type="text" placeholder="电话" name="phone" maxlength="11" validate="required|phone" autocomplete="off">
        //                     </div>
        //                     <button class="btn full-w btn-large mt15" type="submit">提交</button>
        //                 </form>
        //             </div>
        //         </div>`;
        //         if($('#yuyueLayer').length==0){
        //             $('body').append(html);
        //             $('#closeYuyue').click(function(){
        //                 $('#closeYuyue').removeClass('on');
        //                 $('#wrapper').show();
        //                 $(window).scrollTop(n);
        //                 $('#yuyueLayer').hide();
        //             });
        //             this.v({
        //                 id:'yuyueFormT',
        //                 callback: function(e, data) {
        //                   page.formSubmit(e, data, function(res) {
        //                       // window.location.href="/"
        //                       $('#closeYuyue').click();
        //                   });
        //                 }
        //             });
        //         }
        //         $('#wrapper').hide();
        //         $('#yuyueLayer').show();
        //         setTimeout(function(){
        //             $('#closeYuyue').addClass('on');
        //         },1)

        // },
        tabPage:function(){
            var scrollHeight = 0
            $('[data-check]').click(function(){
                $(this).toggleClass('active').siblings().removeClass('active')
                var name = $(this).data('check')
                if(!$(this).hasClass('active')){
                    $('[data-tabPage]').slideUp(150)
                    $('#wrapper').slideDown(150,function(){
                        $(document).scrollTop(scrollHeight)
                    })
                }else{
                    $('[data-tabPage]').slideUp(150)
                    $('[data-tabPage="'+name+'"]').slideDown(150)
                    $('#wrapper').slideUp(150)
                    scrollHeight = $(document).scrollTop()
                    $(document).scrollTop(0)
                }
            })
            $('[data-v]').click(function(){
              console.log(123)
                var value = $(this).data('v')
                var inner = '<span>'+$(this).text()+'</span>'
                if(value == 0){
                    inner = $('[data-check].active').data('default')
                }
                inner += '<i class="iconfont"></i>'
                $(document).trigger('diff-tab',[{value:value,inner:inner}])
                $('[data-check].active').html(inner)
                $('[data-check]').removeClass('active')
                $('[data-tabPage]').slideUp(150)
            })
        },
        // 顶部导航条
        headMenu:function(){
            $('#setting').click(function(){
                $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active')
                $('#nav').hasClass('active') ? $('#nav').removeClass('active') : $('#nav').addClass('active')
            })
            $(window).scroll(function(){
                var scale;
                var screenHeight = $(window).scrollTop();
                // var scale = $(window).scrollTop()/screenHeight
                // scale = scale.toFixed(2)
                // scale = scale > 1 ? 1 : scale
                if(screenHeight<10){
                    scale = 0
                }else{
                    scale = 1
                }
                $('.head').css({
                    backgroundColor: 'rgba(6,6,73,'+scale+')'
                })
            })
            $('#nav,#closeNav').on('click',function(e){
                $('#setting').removeClass('active')
                $('#nav').removeClass('active')
                e.stopPropagation()
            })
            $('.rightNav').on('click',function(e){
                e.stopPropagation()
            })
        },
        // 定位用快速导航
        fastNav:function(c){
            var local = $('#location-province').length?$('#location-province') : $('#location')
            local.scrollTop($('dt.'+c).position().top+10);
          $('.fast-nav a:contains('+c+')').addClass('active').siblings().removeClass('active');
          setTimeout(function(){
            $('.fast-nav a').removeClass('active');
          },400)
        },
        // 调用分享弹层
        openShare:function(){
          var str = '<div class="my-share-box">\
                <a href="javascript:page.share(\'sina\')" class="iconfont icon-weibo" style="background:#e5493a"></a>\
                <a href="javascript:page.share(\'qzone\')" class="iconfont icon-qzone" style="background:#ffce00"></a>\
                <a href="javascript:page.share(\'qq\')" class="iconfont icon-qq1" style="background:#38a9e5"></a>\
            </div>';
            layer.open({
              content: str
              ,btn: ['取消']
              ,skin: 'footer'
            });
        },
        // 分享方法
        share:function (cmd){
            var params = {
                title:document.title,
                url:location.href,
            }
            switch(cmd){
                case 'sina':
                    window.open('http://service.weibo.com/share/share.php?title='+params.title+'&url='+params.url+'&searchPic=true');
                break;
                case 'qzone':
                    window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+params.title+'&url='+params.url+'&searchPic=true');
                break;
                case 'qq':
                    window.open('http://connect.qq.com/widget/shareqq/index.html?title='+params.title+'&url='+params.url+'&searchPic=true');
                break;
            }
        },
        // url截取
        urlParams: function(){
            var query = window.location.search.substring(1);
            var param ={};
            if(query){
                $.each(query.split('&'),function(i,d){
                    var o = d.split('=');
                    param[o[0]] = o[1];
                });
            }
            return param;
        },
        // 选项卡
        tab: function() {
            $('.tab-tit').on('click', 'span', function() {
                var $this = $(this),
                    n = $this.index();
                $this.addClass('active').siblings().removeClass('active');
                $this.parents('.tab-tit').siblings('.tab-layer').children('div').eq(n).siblings().hide().end().show();
                $(window).scroll()
            });
        },
        // 动画滚动方法
        scrollFire:function(obj){
            // obj={
            //     dom:'',
            //     active:'',
            //     fn:,
            // }
            var $w=$(window);
            var $doms=$(obj.dom);
            var tops=[];
            $doms.each(function(i,ob){
              tops.push($(ob).offset().top);
            });
            function action(){
              var w_top=$w.scrollTop();
              var w_h=$w.height();
              $.each(tops,function(k,v){
                var $dom=$doms.eq(k);
                if(v-obj.offset<w_top+w_h&&$dom.height()+v+obj.offset>w_top){
                  $dom.addClass(obj.active);
                  if(obj.fn){
                    obj.fn($dom)
                  }
                }
              })
            }
            action();
            $w.scroll(action);
            $w.resize(action);
        },
        //只处理表单验证
        v:function(opt){
            var id = opt.id?opt.id:'bottomBar';
            var errorType = opt.errorType == 'layer' ? opt.errorType : 'none'
            var $obj = $('#'+id),_self=this;
            $obj.submit(function(e) {
                e.preventDefault();
                var b = $(this).validate({
                  isone: true,
                  validate:{
                    pwd:function(e){
                      if(e.val().length < 6 || e.val().length > 20){
                        _error(e,'pwd');
                        return false
                      }
                    }
                  },
                  messages:{
                    pwd:'请设置6~20位'
                  },
                  error:function(e, t){
                      if(errorType != 'none'){
                            var msg = e.attr('placeholder').replace('请输入','')+t;
                            layer.open({
                                content: msg || '输入内容不符合要求',
                                time:1.5
                            });
                          return
                      }
                      e.addClass('error');
                      e.one('focus',function(){
                          $(this).removeClass('error');
                          $(this).next('.error').remove();
                      });
                      var msg = e.attr('placeholder').replace('请输入','')+t;
                      e.next('.error').remove();
                      e.parent().append('<div class="error">'+msg+'</div>');
                  }
              });
              if(b){
                  opt.callback && opt.callback($obj, $obj.serializeArray());
              }
            });
        },
        // 通用预约方法
        formSubmit:function(e,data,callback){
            var _self = this;
            var method = e.attr('method');
            var dataType = e.attr('data-type');
            var index = layer.open({type: 2,shadeClose:false,shade:'background-color: rgba(0,0,0,.2)'});
            $.ajax({
                // url:$(e[0]).attr('action') ? e[0].action:'/api/user/appoint.php',
                url:'https://www.jiajuol.com/api/0200/seller_join.php',
                dataType: dataType || 'jsonp',
                type:method || 'get',
                data:data,
                success:function(res){
                    e[0].reset();
                    layer.close(index);
                    layer.open({
                        content: res.description||'提交成功',
                        time:1.5
                    });
                    if(typeof callback === 'function'){
                      callback(res);
                      $("#com_apply_bg").hide();
                      $("#com_apply_content").hide();
                      $("#com_apply_close").hide();
                    }
                },
                error:function(){
                  layer.close(index);
                  layer.open({
                      content: '接口异常',
                      time:1.5
                  });
                }
            })
        },
        //获取验证码用倒计时
        codeCountdown: function (obj) {
          var t = obj.innerHTML,
            n = 60;
          function fn() {
            if (n > 0) {
              obj.disabled = true;
              $(obj).addClass('disabled');
              obj.innerHTML = '倒计时' + (n--) + '秒';
              setTimeout(fn, 1000);
            } else {
              obj.disabled = false;
              obj.innerHTML = t;
              $(obj).removeClass('disabled');
            }
          }
          fn();
        },
        //活动倒计时
        countdown: function(opt) {
          //  1h = 3600 s
          //  1s = 1000 ms
          (function() {
              var t = null;
              var sTime = new Date(opt.date);
              var mydate = new Date();
              var T = Math.floor((sTime - mydate) / 1000);
              if (T <= 0) {
                  clearTimeout(t);
                  opt.obj.html(opt.txt).parents('.count').addClass('pass');
                  return;
              }
              var D = Math.floor(T / (3600 * 24));
              var H = Math.floor((T - D * 24 * 3600) / 3600);
              var M = Math.floor((T / 60) - (D * 24 * 60 + H * 60));
              var S = T % 60;

              function setnum(d) {
                  if (d < 10) {
                      return '0' + d;
                  } else {
                      return d;
                  }
              }

              // var html = setnum(D, '天') + setnum(H, '小时') + setnum(M, '分') + S + '秒';
              var html = '<span class="pdl2 pdr2 f9">'+setnum(D)+'</span><span class="pdl2 pdr2 f9">'+setnum(H)+'</span><span class="pdl2 pdr2 f9">'+setnum(M)+'</span><span class="pdl2 pdr2 f9">'+setnum(S)+'</span>'
              opt.obj.html(html);
              t = setTimeout(function() {
                  page.countdown(opt);
              }, 1000);
          })();
        },
        // 渲染收藏（一进入页面）
        collectionList: function(type){
          var ar = $('[collect-id][collect-status]')
          var ids = []
          $.each(ar,function(i,v){
              ids.push($(v).attr('collect-id'))
          })
          ids = JSON.stringify(ids)
          if(ids.length){
            if ($.cookie("dyrs_userinfo")) {
                if(typeof collect_type == 'undefined'){
                    return false
                }
              var url="";
              if (collect_type == 'case') {
                url = "/api/user/getSubjectCollectStatusForUser.php";
              } else if (collect_type == 'photo') {
                url = "/api/user/getPhotoCollectStatusForUser.php";
              }
              if (!url) {
                return false;
              }
              $.ajax({
                type: 'get',
                url: url,
                data: {
                  id: ids
                },
                success: function(res) {
                  if (res.code == 2000) {
                    for(var key in res.data){
                      if (res.data[key] == 1) { // 已收藏
                        $("[collect-id = "+key+"]").addClass('icon-zan1').removeClass("icon-xin");
                        $("[collect-id ="+key+"]").attr("collect-status", "yes");
                        // $(".collect[data-id ="+key+"]").find("span").eq(1).show();
                        // $(".collect[data-id ="+key+"]").find("span").eq(0).hide();
                      } else { // 未收藏
                        $("[collect-id = "+key+"]").addClass('icon-xin').removeClass("icon-zan1");
                        $("[collect-id ="+key+"]").attr("collect-status", "no");
                        // $(".collect[data-id ="+key+"]").find("span").eq(0).show();
                        // $(".collect[data-id ="+key+"]").find("span").eq(1).hide();
                      }
                    }
                  } else {
                    console.log("error");
                  }
                }
              })
            }
          }
        },
        /**收藏/取消收藏
         *
         * index 点击元素的下标
         * **/
        setCollect: function(id,type,e){
          if ($.cookie("dyrs_userinfo")) {
            if (type == 'case') {
              var act = $(e).attr("collect-status") == "no" ? 'user_add_subject' : 'user_delete_subject';
              var url = "/api/user/subject.php";
            } else {
              var act = $(e).attr("collect-status") == "no" ? 'user_add_photo' : 'user_delete_photo';
              var url = "/api/user/collect.php";
            }
            $.ajax({
              type: "post",
              url: url,
              data:{
                  act: act,
                  id: id,
                  csrfToken : csrfToken
              },
              success: function(res){
                  if (res.code == 2000) {
                    var num = Number($(e).parent().find(".collect_num").html());
                      if(act == 'user_add_subject' || act == 'user_add_photo') {
                        $(e).removeClass("icon-xin").addClass('icon-zan1');
                        $(e).attr("collect-status", "yes");
                        $(e).parent().find(".collect_num").html(num+1);
                      } else {
                        $(e).removeClass("icon-zan1").addClass('icon-xin');
                        $(e).attr("collect-status", "no");
                        if(num > 0){
                          $(e).parent().find(".collect_num").html(num-1);
                        }
                      }
                  }
              }
            })
          } else {
            window.location.href="//m.dyrs.com.cn/user/login?backurl="+window.location.href;
          }
        },
        /** 广告位渲染
         *
        **/
        setAdvertisement: function(id){
          $.ajax({
            type: "get",
            url:"/api/ad/ad.php",
            data:{
              page_id: id
            },
            success: function(res){
              if(res.code == 2000) {
                for(var key in res.data) {
                  $("div[data-posid="+key+"]").html('<a href="'+res.data[key].clickurl+'" target="'+res.data[key].opentype+'"><img src="'+res.data[key].url_format+'" style="width:100%"></a>')
                }
              }
            }
          })
        }
    }

    w.Page = function(obj) {
      for (var i in obj) {
          App.prototype[i] = obj[i];
      }
      var app = new App();
      app.init();
      if ('onLoad' in app) {
          window.onload = function() {
              app.onLoad();
          };
      }
      if ('onReady' in app) {
          $(document).ready(function() {
              app.onReady();
          });
      }
      if ('onResize' in app) {
          var flag = null;
          $(window).on('resize', function() {
              if (flag)
                  clearTimeout(flag);
              flag = setTimeout(function() {
                  app.onResize()
              }, 120)
          })
      }
      if ('onScroll' in app) {
          $(window).on('scroll', function() {
              app.onScroll();
          });
      }
    //   if ('onReachBottom' in app) {
    //       if($('#loadState').length==0||$('#loadState').hasClass('loadend')){

    //       }else{
    //           // var onReachBottomFlag = null;
    //           $(window).on('scroll', function() {
    //               if ($(window).scrollTop() + $(window).height() >= $(document).height()-500||$(window).height() >= $(document).height()) {
    //                   // if (onReachBottomFlag) {clearTimeout(onReachBottomFlag)};
    //                   // onReachBottomFlag = setTimeout(function () {
    //                       app.onReachBottom();
    //                   // }, 200)　
    //               }
    //           }).scroll();
    //       }
    //   }
      return app;
    }
})(window);

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);
    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold: 0,
            failure_limit: 0,
            event: 'scroll',
            effect: 'show',
            container: window,
            data_attribute: 'original',
            skip_invisible: true,
            appear: null,
            load: null
        };

        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(':visible')) {
                    return;
                }
                if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {

                    /* Nothing. */
                } else if (!$.belowthefold(this, settings) && !$.rightoffold(this, settings)) {
                    $this.trigger('appear');
                    /* if we found an image we'll load, reset the counter */
                    counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        //return false;
                    }
                }
            });

        }

        if (options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined || settings.container === window)
            ? $window
            : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf('scroll')) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one('appear', function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $('<img />').bind('load', function() {
                        $self.hide().attr('src', $self.data(settings.data_attribute))[settings.effect](settings.effect_speed);
                        self.loaded = true;

                        /* Remove image from array so it is not looped next time. */
                        var temp = $.grep(elements, function(element) {
                            return !element.loaded;
                        });
                        elements = $(temp);

                        if (settings.load) {
                            var elements_left = elements.length;
                            settings.load.call(self, this.width, this.height);
                        }
                    }).attr('src', $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf('scroll')) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger('appear');
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind('resize', function(event) {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind('pageshow', function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger('appear');
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        'below-the-fold': function(a) {
            return $.belowthefold(a, {threshold: 0});
        },
        'above-the-top': function(a) {
            return !$.belowthefold(a, {threshold: 0});
        },
        'right-of-screen': function(a) {
            return $.rightoffold(a, {threshold: 0});
        },
        'left-of-screen': function(a) {
            return !$.rightoffold(a, {threshold: 0});
        },
        'in-viewport': function(a) {
            return $.inviewport(a, {threshold: 0});
        },
        /* Maintain BC for couple of versions. */
        'above-the-fold': function(a) {
            return !$.belowthefold(a, {threshold: 0});
        },
        'right-of-fold': function(a) {
            return $.rightoffold(a, {threshold: 0});
        },
        'left-of-fold': function(a) {
            return !$.rightoffold(a, {threshold: 0});
        }
    });
})(jQuery, window, document);

//懒加载
var var_lazy = {
    // effect: 'fadeIn',
    threshold: 400,
    load: function(w1, h1) {

        var load_this = $(this),
            _this_parent_width,
            _this_parent_height,
            _this_width,
            _this_height;
        if (!load_this.is('img')) {
            load_this.css('background-image', 'url(' + $(this).attr('data-original') + ')');
            load_this.removeAttr('src');
        }
        load_this.addClass('load-over').parents('.lazy').addClass('load-over');
        if (load_this.hasClass('auto')) {
            _this_parent_width = load_this.parents('.lazy').width();
            _this_parent_height = load_this.parents('.lazy').height();
            _this_width = w1;
            _this_height = h1;
            //              console.log(_this_width+"}"+_this_height)
            if (_this_parent_width / _this_parent_height < _this_width / _this_height) {
                load_this.css({width: 'auto', height: '100%'});
                _this_width = _this_parent_height * w1 / h1;
                load_this.css({
                    left: -(((_this_width - _this_parent_width) / 2) / _this_parent_width) * 100 + '%',
                    top: 0
                });
            } else {
                load_this.css({width: '100%', height: 'auto'});
                _this_height = _this_parent_width * h1 / w1;
                load_this.css({
                    top: -(((_this_height - _this_parent_height) / 2) / _this_parent_height) * 100 + '%',
                    left: 0
                });
            }
        } else if (load_this.hasClass('auto_height')) {
            load_this.css({height: 'auto', width: 'auto'});
        } else if (load_this.hasClass('height_middle')) {
            _this_parent_height = load_this.parents('.lazy').height();
            _this_parent_width = load_this.parents('.lazy').width();
            _this_height = _this_parent_width * h1 / w1;
            load_this.css({
                top: -(((_this_height - _this_parent_height) / 2) / _this_parent_height) * 100 + '%',
                left: 0
            });
        } else if (load_this.hasClass('auto_inner')) {
            _this_parent_width = load_this.parents('.lazy').width();
            _this_parent_height = load_this.parents('.lazy').height();
            _this_width = w1;
            _this_height = h1;
            //              console.log(_this_width+"}"+_this_height)
            if (_this_parent_width / _this_parent_height > _this_width / _this_height) {
                load_this.css({width: 'auto', height: '100%'});
                _this_width = _this_parent_height * w1 / h1;
                load_this.css({
                    left: -(((_this_width - _this_parent_width) / 2) / _this_parent_width) * 100 + '%',
                    top: 0
                });
            } else {
                load_this.css({width: '100%', height: 'auto'});
                _this_height = _this_parent_width * h1 / w1;
                load_this.css({
                    top: -(((_this_height - _this_parent_height) / 2) / _this_parent_height) * 100 + '%',
                    left: 0
                });
            }
        }
    }
};
setTimeout(function() {
    $('.lazy_img').lazyload(var_lazy);
    // $(window).scroll();
}, 300);



// jquery分页器
(function($, window, document, undefined) {
    //定义分页类
    function Paging(element, options) {
        this.element = element;
        //传入形参
        this.options = {
            pageNo: options.pageNo||1,
            totalPage: options.totalPage,
            totalSize:options.totalSize,
            callback:options.callback
        };
        //根据形参初始化分页html和css代码
        this.init();
    }
    //对Paging的实例对象添加公共的属性和方法
    Paging.prototype = {
        constructor: Paging,
        init: function() {
            this.creatHtml();
            this.bindEvent();
        },
        creatHtml: function() {
            var me = this;
            var content = '';
            var current = me.options.pageNo;
            var total = me.options.totalPage;
            var totalNum = me.options.totalSize;
            //总页数大于6时候
            if(total > 6) {
                //当前页数小于5时显示省略号
                if(current < 5) {
                    for(var i = 1; i < 6; i++) {
                        if(current == i) {
                            content += '<a class=\'current\'>' + i + '</a>';
                        } else {
                            content += '<a>' + i + '</a>';
                        }
                    }
                    content += '. . .';
                    content += '<a>'+total+'</a>';
                } else {
                     //判断页码在末尾的时候
                    if(current < total - 3) {
                        for(var i = current - 2; i < current + 3; i++) {
                            if(current == i) {
                                content += '<a class=\'current\'>' + i + '</a>';
                            } else {
                                content += '<a>' + i + '</a>';
                            }
                        }
                        content += '. . .';
                        content += '<a>'+total+'</a>';
                    //页码在中间部分时候
                    } else {
                        content += '<a>1</a>';
                        content += '. . .';
                        for(var i = total - 4; i < total + 1; i++) {
                            if(current == i) {
                                content += '<a class=\'current\'>' + i + '</a>';
                            } else {
                                content += '<a>' + i + '</a>';
                            }
                        }
                    }
                }
                //页面总数小于6的时候
            } else {
                for(var i = 1; i < total + 1; i++) {
                    if(current == i) {
                        content += '<a class=\'current\'>' + i + '</a>';
                    } else {
                        content += '<a>' + i + '</a>';
                    }
                }
            }
            content += '<a id="firstPage">首页</a><span class=\'preNext\'><a id=\'prePage\'>&lt;</a>';
            content += '<a id=\'nextPage\'>&gt;</a></span>';
            content += '<a id="lastPage">尾页</a>';
            // content += "<span class='totalPages'> 共<span>"+total+"</span>页 </span>";
            // content += "<span class='totalSize'> 共<span>"+totalNum+"</span>条记录 </span>";
            me.element.html(content);
        },
        //添加页面操作事件
        bindEvent: function() {
            var me = this;
            me.element.off('click', 'a');
            me.element.on('click', 'a', function() {
                var num = $(this).html();
                var id=$(this).attr('id');
                if(id == 'prePage') {
                    if(me.options.pageNo == 1) {
                        me.options.pageNo = 1;
                    } else {
                        me.options.pageNo = +me.options.pageNo - 1;
                    }
                } else if(id == 'nextPage') {
                    if(me.options.pageNo == me.options.totalPage) {
                        me.options.pageNo = me.options.totalPage
                    } else {
                        me.options.pageNo = +me.options.pageNo + 1;
                    }

                } else if(id =='firstPage') {
                    me.options.pageNo = 1;
                } else if(id =='lastPage') {
                    me.options.pageNo = me.options.totalPage;
                }else{
                    me.options.pageNo = +num;
                }
                me.creatHtml();
                if(me.options.callback) {
                    me.options.callback(me.options.pageNo);
                }
            });
        }
    };
    //通过jQuery对象初始化分页对象
    $.fn.paging = function(options) {
        return new Paging($(this), options);
    }
})(jQuery, window, document);
