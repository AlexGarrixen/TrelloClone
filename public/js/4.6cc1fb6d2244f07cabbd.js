(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(124),o=a.n(c),i=a(35),s=a.n(i),u=a(15),d=a.n(u),m=a(129),b=a(134),f=a(138),p=a(135),h=a(18),E=a.n(h),v=a(137),g=function(e){var t=e.value.split(/\n/).length;e.rows=t},O=function(e){var t=e.buttonText,a=e.onChange,n=e.onBlur,r=e.onRequestCancel,c=e.onRequestSuccess,i=e.placeholder,s=e.textArea,u=void 0!==s&&s,d=e.value,m=e.name,h=e.disabledSuccessButton,E=void 0!==h&&h;return l.a.createElement("div",{className:"textfield-editing"},l.a.createElement(v.a,o()({textArea:u,placeholder:i,value:d,onChange:a,onBlur:n,name:m,fullWidth:!0,onKeyUp:u?function(e){var t=e.target;return g(t)}:function(){}},u?{rows:1}:{})),l.a.createElement("div",{className:"textfield-editing__actions"},l.a.createElement(f.a,{variant:"text",onClick:r},l.a.createElement(b.a.Close,null)),l.a.createElement(p.a,{color:"primary",startIcon:l.a.createElement(b.a.Plus,null),onClick:c,disabled:E},t)))};O.propTypes=(n={buttonText:d.a.string,onChange:d.a.func,onBlur:d.a.func,onRequestCancel:d.a.func},E()(n,"onRequestCancel",d.a.func),E()(n,"placeholder",d.a.string),E()(n,"textArea",d.a.bool),E()(n,"value",d.a.string),E()(n,"name",d.a.string),E()(n,"disabledSuccessButton",d.a.bool),n);var j=O,C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),a=s()(t,2),n=a[0],l=a[1],c=function(e){return function(){return l(e||!n)}};return[n,c]},_=a(34),S=a(136),N=a(9),y=function(e,t){var a=Object(r.useState)(!1),n=s()(a,2),l=n[0],c=n[1],o=Object(_.b)(),i=Object(S.a)({initialState:{title:""},onSubmit:function(a){var n=a.title;return n.length>1&&o(Object(N.r)(e,{title:n},{onRequest:function(){return c(!0)},onSuccessRequest:function(){c(!1),b({title:""}),t()}}))}}),u=i.form,d=i.handleChange,m=i.handleSubmit,b=i.setForm;return{isRequesting:l,form:u,handleChange:d,handleSubmit:m}},R=function(e){var t=e.listId,a=C(!1),n=s()(a,2),r=n[0],c=n[1],o=y(t,c(!1)),i=o.form,u=o.handleChange,d=o.handleSubmit,m=o.isRequesting;return r?l.a.createElement(j,{onRequestCancel:c(),onRequestSuccess:d,placeholder:"Add card title",buttonText:m?"Adding...":"Add card",onChange:u,name:"title",value:i.title,disabledSuccessButton:i.title.length<1}):l.a.createElement(p.a,{color:"primary",endIcon:l.a.createElement(b.a.Plus,null),onClick:c(),fullWidth:!0},"Add another card")};R.propTypes={listId:d.a.string};var q=R,k=a(125),w=a.n(k),D=a(127),x=a.n(D),P=Object(r.forwardRef)((function(e,t){var a=e.onOutsideClick,n=e.listId,r=w()(e,["onOutsideClick","listId"]),c=Object(_.b)();return l.a.createElement(x.a,{onOutsideClick:a},l.a.createElement("ul",o()({ref:t,className:"board-popover-list-options"},r),l.a.createElement("li",{className:"board-popover-list-options__option",onClick:function(){return c(Object(N.A)(n))}},"Delete this list")))}));P.propTypes={onOutsideClick:d.a.func,listId:d.a.string.isRequired};var I=P,T=a(133);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(){var e=Object(r.useState)(null),t=s()(e,2),a=t[0],n=t[1],l=Object(r.useState)(null),c=s()(l,2),o=c[0],i=c[1],u=Object(T.a)(a,o,{modifiers:[{name:"offset",options:{offset:[0,10]}}]}),d=u.styles,m=u.attributes;return{setReferenceElement:n,setPopperElement:i,styles:d.popper,attributes:A({},m.popper)}},B=function(e){var t=e.children,a=e.onDrop,n=e.getChildPayload,c=e.title,i=e.id,u=e.isMobileMatchMedia,d=C(!1),p=s()(d,2),h=p[0],E=p[1],v=Object(r.useMemo)((function(){return t.length}),[t]),g=Object(r.useRef)(null),O=F(),j=O.setPopperElement,_=O.setReferenceElement,S=O.styles,N=O.attributes;return Object(r.useEffect)((function(){return u?document.body.classList.add("smooth-dnd-mobile"):document.body.classList.remove("smooth-dnd-mobile")}),[u]),l.a.createElement("article",{className:"board-list"},l.a.createElement("div",{className:"board-list__header"},l.a.createElement("h3",{className:"board-list__title"},c),l.a.createElement(f.a,{ref:function(e){g.current=e,_(e)},className:"board-list__button-more",onClick:E()},l.a.createElement(b.a.EllipsisV,null))),l.a.createElement("div",{className:"board-list__body"},l.a.createElement(m.Container,{dragClass:"card-ghost",dropClass:"card-ghost-drop",groupName:"col",dropPlaceholderAnimationDuration:200,onDrop:a,getChildPayload:n,dragBeginDelay:u?400:0,dropPlaceholder:{animationDuration:150,showOnTop:!0,className:"card-drop-preview"}},t)),l.a.createElement("div",{className:v>1?"mt-4":""},l.a.createElement(q,{listId:i}),h&&l.a.createElement(I,o()({},N,{ref:j,style:S,listId:i,onOutsideClick:function(e){e.target!==g.current&&E(!1)()}}))))};B.propTypes={children:d.a.node,onDrop:d.a.func,getChildPayload:d.a.func,title:d.a.string,id:d.a.string.isRequired,isMobileMatchMedia:d.a.bool};var U=B,W=a(141),L=a(126),Y=a(139),K={default:"badge",colorGreen:"badge--green",colorYellow:"badge--yellow",colorOrange:"badge--orange",colorPurple:"badge--purple",colorBlue:"badge--blue"},z=function(e){var t=e.children,a=e.className,n=e.component,r=void 0===n?"span":n,c=e.color,i=void 0===c?"blue":c,s=w()(e,["children","className","component","color"]);return l.a.createElement(r,o()({className:Object(L.a)(K.default,["".concat(K["color".concat(Object(Y.a)(i))])],a)},s),t)};z.propTypes={children:d.a.node,component:d.a.elementType,color:d.a.string};var H=z,J=function(){var e=Object(_.c)((function(e){return e.board})).cardModalEditOpen,t=Object(_.b)();return{isOpen:e,handleCardSelected:function(e){return t(Object(N.J)(e))},handleCloseCardSelected:function(){return t(Object(N.o)())}}},G=a(3),V=function(e){var t=e._id,a=e.listId,n=e.title,c=e.description,o=e.listName,i=e.picture,s=e.labels,u=e.attachments,d=e.comments,f=J().handleCardSelected,p=Object(r.useMemo)((function(){return{_id:t,listId:a,title:n,description:c,listName:o,picture:i,labels:s,attachments:u,comments:d}}),[t,a,n,c,o,i,s,u,d]);return l.a.createElement(m.Draggable,null,l.a.createElement(W.a,{className:"board-list-card",title:n,picture:(null==i?void 0:i.path)||"",onClick:function(){return f(p)}},l.a.createElement("ul",{className:"board-list-card__grid-labels"},Object(G.a)(s)&&s.map((function(e){var t=e._id,a=e.title,n=e.color;return l.a.createElement(H,{key:t,color:n},a)}))),l.a.createElement("div",{className:"board-list-card__footer"},l.a.createElement("p",{className:"board-list-card__num-comments"},l.a.createElement(b.a.Comment,{className:"mr-2"}),d.length),l.a.createElement("p",{className:"board-list-card__num-attachments"},l.a.createElement(b.a.PaperClip,{className:"mr-2"})," ",u.length))))};V.propTypes={_id:d.a.string,listId:d.a.string,title:d.a.string,description:d.a.string,listName:d.a.string,picture:d.a.shape({path:d.a.string,publicId:d.a.string}),labels:d.a.array,attachments:d.a.array,comments:d.a.array};var Q=V,X=a(5),Z=function(e){var t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1],c=Object(X.h)().boardId,o=Object(_.b)(),i=Object(S.a)({initialState:{title:""},onSubmit:function(t){var a=t.title;return a.length>1&&o(Object(N.u)(c,{title:a},{onRequest:function(){return l(!0)},onSuccessRequest:function(){l(!1),e()}}))}});return{isRequesting:n,form:i.form,handleChange:i.handleChange,handleSubmit:i.handleSubmit}},$=function(){var e=C(!1),t=s()(e,2),a=t[0],n=t[1],r=Z(n(!1)),c=r.form,o=r.handleChange,i=r.handleSubmit,u=r.isRequesting;return l.a.createElement("div",{style:{width:243},className:"flex-shrink-0"},a?l.a.createElement(j,{onRequestCancel:n(),onRequestSuccess:i,placeholder:"Add list title",buttonText:u?"Adding...":"Add list",onChange:o,value:c.title,name:"title",disabledSuccessButton:c.title.length<1}):l.a.createElement(p.a,{color:"primary",endIcon:l.a.createElement(b.a.Plus,null),onClick:n(),fullWidth:!0},"Add another list"))},ee=a(19),te=a.n(ee);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ne=function(){var e=Object(X.h)().boardId,t=Object(_.b)(),a=Object(_.c)((function(e){return e.board})).prevRequests,n=Object(r.useMemo)((function(){return a[e]||[]}),[e,a[e]]),l=Object(r.useState)(n),c=s()(l,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){o.length!==n.length&&i(a[e])}),[n]),{lists:o,handleOnDrop:function(e,a){var n=a.addedIndex,r=a.removedIndex,l=a.payload,c=te()(o),s=c.find((function(t){return t._id===e})).cards,u=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);u.listId=e,null===n&&null===r||(null!==r&&(u=s.splice(r,1)[0]),null!==n&&s.splice(n,0,u),i(c),t(Object(N.I)(e,s)),l.listId!==e&&t(Object(N.E)(l._id,{listId:e})))},getCard:function(e,t){return o.find((function(e){return e._id===t})).cards[e]}}},re=function(e){var t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1],c=Object(r.useRef)(null),o=function(e){var t=e.matches;return l(t)};return Object(r.useEffect)((function(){return e&&(c.current=window.matchMedia(e),c.current.addEventListener("change",o),l(c.current.matches)),function(){c.current&&(c.current.removeListener(o),l(!1))}}),[]),{isMatchMedia:n}},le=function(){var e=ne(t),t=e.lists,a=e.handleOnDrop,n=e.getCard,r=re("(max-width: 768px)").isMatchMedia;return l.a.createElement("ul",{className:"board-lists-grid"},Object(G.a)(t)&&t.map((function(e){var t=e.cards,c=e._id,i=e.title;return l.a.createElement(U,{key:c,onDrop:function(e){return a(c,e)},getChildPayload:function(e){return n(e,c)},title:i,id:c,isMobileMatchMedia:r},Object(G.a)(t)&&t.map((function(e){return l.a.createElement(Q,o()({key:e._id},e))})))})),l.a.createElement($,null))},ce=a(128),oe=a.n(ce),ie=a(140),se=function(e){var t=e.picture;return l.a.createElement("div",{className:"board-card-edit-form__picture",style:{backgroundImage:"url(".concat(t,")")}})};se.propTypes={picture:d.a.string};var ue=se,de=function(){var e=Object(_.c)((function(e){return e.board})).cardSelected,t=Object(_.b)(),a=Object(S.a)({initialState:{title:e.title},onSubmit:function(a){var n=a.title;n!==e.title&&n.length>0&&t(Object(N.G)(n))}});return{form:a.form,handleChange:a.handleChange,handleSubmit:a.handleSubmit}},me=function(e){var t=e.listName,a=de(),n=a.form,r=a.handleChange,c=a.handleSubmit;return l.a.createElement("div",{className:"board-card-edit-form__header"},l.a.createElement(v.a,{className:"board-card-edit-form__textfield-title",placeholder:"Write title",value:n.title,onChange:r,onBlur:c,name:"title",fullWidth:!0}),l.a.createElement("p",{className:"board-card-edit-form__list-name"},l.a.createElement("span",null,"in list ")," ",t))};me.proTypes={listName:d.a.string};var be=me,fe=function(e){var t=Object(_.b)(),a=Object(_.c)((function(e){return e.board})).cardSelected,n=Object(r.useState)(!1),l=s()(n,2),c=l[0],o=l[1],i=Object(S.a)({initialState:{description:a.description},onSubmit:function(n){var r=n.description;r!==a.description&&r.length>1&&t(Object(N.H)(r,{onRequest:function(){return o(!0)},onSuccessRequest:function(){o(!1),Object(G.b)(e)&&e()}}))}});return{form:i.form,handleChange:i.handleChange,handleSubmit:i.handleSubmit,isRequesting:c}},pe=function(){var e=Object(_.c)((function(e){return e.board})).cardSelected,t=C(),a=s()(t,2),n=a[0],c=a[1],o=Object(r.useRef)(null),i=fe(c(!1)),u=i.form,d=i.handleChange,m=i.handleSubmit,f=i.isRequesting,h=Object(r.useMemo)((function(){return e.description&&e.description.replace(/\n/g,"<br />")}),[e.description]);return Object(r.useEffect)((function(){o.current&&(o.current.innerHTML=h)}),[o,e.description,n]),l.a.createElement("div",{className:"board-card-edit-form__description"},l.a.createElement("div",{className:"board-card-edit-form__description-header"},l.a.createElement("p",{className:"board-card-edit-form__description-title-header"},l.a.createElement(b.a.FileAlt,null),"Description"),l.a.createElement(p.a,{variant:"outlined",onClick:c(),startIcon:n?l.a.createElement(b.a.Close,null):l.a.createElement(b.a.Pencil,null)},n?"Cancel":"Edit")),n?l.a.createElement(j,{buttonText:f?"Updating...":"Save",onRequestCancel:c(),onChange:d,onBlur:m,value:u.description,name:"description",textArea:!0}):l.a.createElement("p",{ref:o,className:"board-card-edit-form__description-content"}))},he=a(130),Ee=a.n(he),ve=function(){var e=Object(_.b)(),t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1];return{handleDeleteAttachment:function(t){return e(Object(N.v)(t,{onRequest:function(){return l(!0)},onSuccessRequest:function(){return l(!1)}}))},isRequesting:n}},ge=function(){var e=Object(_.b)(),t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1];return{handleUpdatePicture:function(t,a){return e(Object(N.F)({path:t,publicId:a},{onRequest:function(){return l(!0)},onSuccessRequest:function(){return l(!1)}}))},isRequesting:n}},Oe=a(1),je=a.n(Oe),Ce=a(2),_e=a.n(Ce),Se=a(6),Ne=a.n(Se),ye=function(){var e=_e()(je.a.mark((function e(t,a){var n,r,l,c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.a.get(t,{responseType:"blob"});case 3:n=e.sent,r=n.data,l=URL.createObjectURL(new Blob([r])),(c=document.createElement("a")).href=l,c.setAttribute("download",a),document.body.appendChild(c),c.click(),c.remove(),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a){return e.apply(this,arguments)}}(),Re=function(e){var t=e.path,a=e.publicId,n=ge(),r=n.handleUpdatePicture,c=n.isRequesting;return l.a.createElement(p.a,{variant:"outlined",onClick:function(){return r(t,a)}},c?"Setting...":"As cover")},qe=function(e){var t=e.publicId,a=ve(),n=a.handleDeleteAttachment,r=a.isRequesting;return l.a.createElement(p.a,{variant:"outlined",onClick:function(){return n(t)}},r?"Deleting...":"Delete")},ke=function(e){var t=e.originalname,a=e.path,n=e.publicId,c=e.date,o=Object(_.c)((function(e){return e.board})).cardSelected,i=Object(r.useMemo)((function(){return Ee()(c).format("MMMM D, YYYY")}),[c]);return l.a.createElement("article",{className:"board-card-edit-form__attachment"},l.a.createElement("div",{className:"board-card-edit-form__attachment-picture",style:{backgroundImage:"url(".concat(a,")")}}),l.a.createElement("div",null,l.a.createElement("p",{className:"board-card-edit-form__attachment-date"},"Add ",i),l.a.createElement("p",{className:"board-card-edit-form__attachment-name truncate"},t),l.a.createElement("div",{className:"board-card-edit-form__attachment-actions"},l.a.createElement(p.a,{variant:"outlined",onClick:function(){return ye(a,t)}},"Download"),o.picture.path!==a&&l.a.createElement(Re,{path:a,publicId:n}),l.a.createElement(qe,{publicId:n}))))},we=function(e){var t=e.attachments;return l.a.createElement("div",{className:"board-card-edit-form__attachments"},l.a.createElement("div",{className:"board-card-edit-form__attachments-header"},l.a.createElement("p",null,l.a.createElement(b.a.FileAlt,null),l.a.createElement("span",{className:"board-card-edit-form__attachments-header-title"},"Attachments"))),l.a.createElement("ul",null,Object(G.a)(t)&&t.map((function(e){return l.a.createElement(ke,o()({key:e._id},e))}))))};we.propTypes={attachments:d.a.array};var De=we,xe=Object(r.forwardRef)((function(e,t){var a=e.onOutsideClick,n=e.onRequestClose,r=e.onRequestConfirm,c=e.headerTitle,i=e.textWarning,s=e.buttonText,u=w()(e,["onOutsideClick","onRequestClose","onRequestConfirm","headerTitle","textWarning","buttonText"]);return l.a.createElement(x.a,{onOutsideClick:a},l.a.createElement("div",o()({ref:t,className:"board-popover-delete-comment"},u),l.a.createElement("div",{className:"board-popover-delete-comment__header"},l.a.createElement("span",{className:"board-popover-delete-comment__header-title"},c),l.a.createElement(f.a,{className:"board-popover-delete-comment__header-button-close",variant:"text",onClick:n},l.a.createElement(b.a.Close,null))),l.a.createElement("div",{className:"board-popover-delete-comment__body"},l.a.createElement("p",{className:"board-popover-delete-comment__text-warning"},i),l.a.createElement(p.a,{className:"mt-4",color:"secondary",onClick:r},s))))}));xe.propTypes={onOutsideClick:d.a.func,onRequestClose:d.a.func,headerTitle:d.a.string,buttonText:d.a.string,textWarning:d.a.string};var Pe=xe,Ie=function(e,t,a){var n=Object(_.b)(),l=Object(r.useState)(!1),c=s()(l,2),o=c[0],i=c[1],u=Object(S.a)({initialState:{comment:t},onSubmit:function(t){var r=t.comment;r.length>1&&n(Object(N.D)(e,r,{onRequest:function(){return i(!0)},onSuccessRequest:function(){i(!1),Object(G.b)(a)&&a()}}))}});return{form:u.form,handleChange:u.handleChange,handleSubmit:u.handleSubmit,isRequesting:o}},Te=function(e){var t=Object(_.b)(),a=Object(r.useState)(!1),n=s()(a,2),l=n[0],c=n[1];return{handleDeleteComment:function(){return t(Object(N.y)(e,{onRequest:function(){return c(!0)},onSuccessRequest:function(){return c(!1)}}))},isRequesting:l}},Me=function(e){var t=e.description,a=e.date,n=e._id,c=Object(r.useRef)(null),i=C(!1),u=s()(i,2),d=u[0],m=u[1],b=C(!1),f=s()(b,2),p=f[0],h=f[1],E=Ie(n,t,m(!1)),v=E.form,g=E.handleChange,O=E.handleSubmit,_=E.isRequesting,S=Te(n),N=S.handleDeleteComment,y=S.isRequesting,R=F(),q=R.setPopperElement,k=R.setReferenceElement,w=R.styles,D=R.attributes,x=Object(r.useMemo)((function(){return Ee()(a).format("MMMM D, YYYY h:mm a")}),[a]),P=Object(r.useMemo)((function(){return t&&t.replace(/\n/g,"<br />")}),[t]);return Object(r.useEffect)((function(){c.current&&(c.current.innerHTML=P)}),[t,d]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"board-card-edit-form__comment"},l.a.createElement("div",{className:"board-card-edit-form__comment-header"},l.a.createElement("p",null,x),l.a.createElement("div",{className:"board-card-edit-form__comment-header-actions"},!d&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{onClick:m()},"Edit"),l.a.createElement("span",null,"-"),l.a.createElement("p",{ref:k,onClick:h()},"Delet")))),d?l.a.createElement(j,{onRequestCancel:m(),onRequestSuccess:O,onChange:g,value:v.comment,name:"comment",buttonText:_?"Saving...":"Save",textArea:!0}):l.a.createElement("p",{className:"board-card-edit-form__comment-description",ref:c})),p&&l.a.createElement(Pe,o()({ref:q,style:w,onOutsideClick:h(!1),onRequestClose:h(),onRequestConfirm:N,headerTitle:"Do you want to delete the comment?",textWarning:"Deleting a comment is permanent. The operation cannot be undone.",buttonText:y?"Deleting...":"Delete comment"},D)))},Ae=function(){var e=Object(_.b)(),t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1],c=Object(S.a)({initialState:{comment:""},onSubmit:function(t){var a=t.comment;a.length>1&&e(Object(N.s)(a,{onRequest:function(){return l(!0)},onSuccessRequest:function(){l(!1),d({comment:""})}}))}}),o=c.form,i=c.handleChange,u=c.handleSubmit,d=c.setForm;return{form:o,handleChange:i,handleSubmit:u,isRequesting:n}},Fe=function(e){var t=e.comments,a=Ae(),n=a.form,r=a.handleChange,c=a.handleSubmit,i=a.isRequesting;return l.a.createElement("div",{className:"board-card-edit-form__comments"},l.a.createElement("div",{className:"board-card-edit-form__comments-textarea-wrapper"},l.a.createElement(v.a,{textArea:!0,fullWidth:!0,className:"board-card-edit-form__comments-textfield",placeholder:"Write a comment",value:n.comment,onChange:r,name:"comment",onKeyUp:function(e){var t=e.target;return g(t)},rows:1}),l.a.createElement(p.a,{className:"board-card-edit-form__comments-button-action",color:"primary",onClick:c,disabled:n.comment.length<1},i?"Saving...":"Comment")),l.a.createElement("ul",null,Object(G.a)(t)&&t.map((function(e){return l.a.createElement(Me,o()({key:e._id},e))}))))};Fe.propTypes={comments:d.a.array};var Be=Fe;function Ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ue(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=Object(_.b)(),n=Object(r.useState)(!1),l=s()(n,2),c=l[0],o=l[1],i=Object(S.a)({initialState:{title:"",color:e},onSubmit:function(e){var n=e.title,r=e.color;n.length>1&&r.length>1&&a(Object(N.t)({title:n,color:r},{onRequest:function(){return o(!0)},onSuccessRequest:function(){o(!1),Object(G.b)(t)&&t()}}))}}),u=i.form,d=i.handleChange,m=i.handleSubmit,b=i.setForm,f=function(e){return function(){return b(We(We({},u),{},{color:e}))}};return{handleColorSelect:f,handleChange:d,handleSubmit:m,form:u,isRequesting:c}},Ye=function(){var e=Object(_.b)();return{handleDeleteLabel:function(t){return e(Object(N.z)(t))}}},Ke=Object(r.forwardRef)((function(e,t){var a=e.onOutsideClick,n=e.onRequestClose,r=w()(e,["onOutsideClick","onRequestClose"]),c=Object(_.c)((function(e){return e.board})).cardSelected,i=Le("blue",(function(){return n()})),s=i.form,u=i.handleChange,d=i.handleSubmit,m=i.handleColorSelect,h=i.isRequesting,E=Ye().handleDeleteLabel;return l.a.createElement(x.a,{onOutsideClick:a},l.a.createElement("div",o()({ref:t,className:"board-popover-add-label"},r),l.a.createElement("div",{className:"board-popover-add-label__header"},l.a.createElement("div",null,l.a.createElement("h3",{className:"board-popover-add-label__header-title"},"Label"),l.a.createElement("p",{className:"board-popover-add-label__header-text-help"},"Select a name and color")),l.a.createElement(f.a,{className:"board-popover-add-label__header-button-close",variant:"text",onClick:n},l.a.createElement(b.a.Close,null))),l.a.createElement(v.a,{autoComplete:"off",placeholder:"label",value:s.title,name:"title",onChange:u,fullWidth:!0}),l.a.createElement("ul",{className:"board-popover-add-label__grid-colors"},["blue","green","orange","purple","yellow"].map((function(e){return l.a.createElement("li",{key:e,className:"board-popover-add-label__color color--".concat(e),onClick:m(e)},s.color===e&&l.a.createElement(b.a.Check,{size:"sm"}))}))),c.labels.length>0&&l.a.createElement("div",{className:"board-popover-add-label__avaliable-labels"},l.a.createElement("div",{className:"board-popover-add-label__header-avaliable-labels"},l.a.createElement(b.a.Tag,null),l.a.createElement("h3",{className:"board-popover-add-label__header-title-avaliable-labels"},"Avaliable")),l.a.createElement("ul",{className:"board-popover-add-label__grid-avaliable-labels"},c.labels.map((function(e){var t=e.title,a=e.color,n=e._id;return l.a.createElement(H,{color:a,className:"relative",key:n},t,l.a.createElement("div",{className:"board-popover-add-label__button-delete-avaliable-label"},l.a.createElement(b.a.Close,{size:"xs",onClick:function(){return E(n)}})))})))),l.a.createElement(p.a,{color:"primary",onClick:d,disabled:s.title.length<1||s.color.length<1},h?"Adding...":"Add")))}));Ke.propTypes={onOutsideClick:d.a.func,onRequestClose:d.a.func};var ze=Ke,He=function(){var e=Object(_.b)(),t=Object(r.useState)(!1),a=s()(t,2),n=a[0],l=a[1];return{handleDeleteCard:function(){return e(Object(N.x)({onRequest:function(){return l(!0)},onSuccessRequest:function(){return l(!1)}}))},isRequesting:n}},Je=function(e){var t=e.onRequestUploadFile,a=C(!1),n=s()(a,2),r=n[0],c=n[1],i=He(),u=i.handleDeleteCard,d=i.isRequesting,m=F(),f=m.setPopperElement,h=m.setReferenceElement,E=m.styles,g=m.attributes;return l.a.createElement("div",{className:"board-card-edit-form__actions"},l.a.createElement(v.a,{type:"file",accept:"image/*",className:"hidden",id:"contained-button-cover",onChange:t}),l.a.createElement("label",{htmlFor:"contained-button-cover",className:"mb-3 block"},l.a.createElement(p.a,{component:"span",startIcon:l.a.createElement(b.a.Image,null),fullWidth:!0},"Cover")),l.a.createElement(p.a,{ref:h,startIcon:l.a.createElement(b.a.Tag,null),onClick:c(),fullWidth:!0},"Labels"),l.a.createElement(p.a,{color:"secondary",startIcon:l.a.createElement(b.a.Trash,null),onClick:u,fullWidth:!0},d?"Removing...":"Remove"),r&&l.a.createElement(ze,o()({ref:f,onOutsideClick:c(!1),onRequestClose:c(),style:E},g)))};Je.propTypes={onRequestUploadFile:d.a.func};var Ge=Je,Ve=a(144),Qe=a(143),Xe=a(7),Ze=function(){var e=Object(_.c)((function(e){return e.board})).cardSelected,t=Object(_.b)(),a=Object(Qe.a)("".concat(Xe.a,"/cards/").concat(e._id,"/attachments"),"PUT"),n=a.isUploading,l=a.error,c=a.data,o=a.progress,i=a.filename,s=a.requestUploadFile;return Object(r.useEffect)((function(){if(null!==c){var e=c.newCard,a=c.attachmentUploaded,n=a.path,r=a.publicId,l=e.attachments;t(Object(N.q)({path:n,publicId:r},l))}}),[c]),{error:l,isUploading:n,progress:o,filename:i,handleUploadAttachment:function(e){var t=e.target;return t.files.length&&s(t.files[0])}}},$e=function(){var e=J().handleCloseCardSelected,t=Object(_.c)((function(e){return e.board})),a=t.cardSelected,n=t.cardErrors,r=a.title,c=a.listName,o=a.picture,i=a.attachments,s=a.comments,u=Ze(),d=u.handleUploadAttachment,m=u.isUploading,p=u.progress,h=u.filename;return l.a.createElement("div",{className:"board-card-edit-form"},l.a.createElement(f.a,{color:"primary",className:"board-card-edit-form__button-close",onClick:e},l.a.createElement(b.a.Close,null)),n.length>0&&l.a.createElement(ie.a,{severity:"error",className:"mb-3"},n.map((function(e){return l.a.createElement("p",null,e)}))),l.a.createElement(ue,{picture:(null==o?void 0:o.path)||""}),m&&l.a.createElement(Ve.a,{className:"mt-4",filename:h,percentage:p}),l.a.createElement(be,{title:r,listName:c}),l.a.createElement("div",{className:"board-card-edit-form__body"},l.a.createElement("div",{className:"board-card-edit-form__wrapper-description-and-comments"},l.a.createElement(pe,null),Object(G.a)(i)&&i.length>0&&l.a.createElement(De,{attachments:i}),l.a.createElement(Be,{comments:s})),l.a.createElement(Ge,{onRequestUploadFile:d})))},et=a(36),tt=function(){var e=Object(_.c)((function(e){return e.board})).sidebarMenuOpen,t=Object(_.b)();return{isOpen:e,handleToggle:function(a){return t(a?Object(N.K)(a):Object(N.K)(!e))}}},at=function(){var e=Object(_.c)((function(e){return e.board})).title,t=tt().handleToggle;return l.a.createElement("div",{className:"board-header-actions"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("h2",{className:"board-header-actions__board-title"},e),l.a.createElement("span",{className:"board-header-actions__board-title-separator"}),l.a.createElement(p.a,{component:et.b,to:"/",startIcon:l.a.createElement(b.a.Th,null)},"All board")),l.a.createElement(p.a,{startIcon:l.a.createElement(b.a.EllipsisV,{className:"mr-2"}),onClick:function(){return t()}},"Show Menu"))},nt=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.board})).title,a=Object(S.a)({initialState:{title:t},onSubmit:function(a){var n=a.title;return n!==t&&n.length>1&&e(Object(N.C)(n))}});return{form:a.form,handleChange:a.handleChange,handleSubmit:a.handleSubmit}},rt=function(){var e=tt().handleToggle,t=nt(),a=t.form,n=t.handleChange,r=t.handleSubmit;return l.a.createElement("div",{className:"board-menu-sidebar__header"},l.a.createElement(v.a,{value:a.title,onChange:n,onBlur:r,name:"title",className:"board-menu-sidebar__header-textfield-title",autoComplete:"off",fullWidth:!0}),l.a.createElement(f.a,{variant:"text",className:"board-menu-sidebar__header-button-close",onClick:function(){return e()}},l.a.createElement(b.a.Close,null)))},lt=function(e){var t=Object(_.c)((function(e){return e.board})).description,a=Object(r.useState)(!1),n=s()(a,2),l=n[0],c=n[1],o=Object(_.b)(),i=Object(S.a)({initialState:{description:t},onSubmit:function(a){var n=a.description;return n!==t&&n.length>1&&o(Object(N.B)(n,{onRequest:function(){return c(!0)},onSuccessRequest:function(){c(!1),Object(G.b)(e)&&e()}}))}});return{isRequesting:l,form:i.form,handleChange:i.handleChange,handleSubmit:i.handleSubmit}},ct=function(){var e=C(!1),t=s()(e,2),a=t[0],n=t[1],r=Object(_.c)((function(e){return e.board})).description,c=lt(n(!1)),o=c.form,i=c.handleChange,u=c.handleSubmit,d=c.isRequesting;return l.a.createElement("div",{className:"board-menu-sidebar__description"},l.a.createElement("div",{className:"board-menu-sidebar__description-header"},l.a.createElement("p",{className:"board-menu-sidebar__description-header-title"},l.a.createElement(b.a.FileAlt,null),l.a.createElement("span",null,"Description")),l.a.createElement(p.a,{variant:"outlined",startIcon:a?l.a.createElement(b.a.Close,null):l.a.createElement(b.a.Pencil,null),onClick:n()},a?"Cancel":"Edit")),a?l.a.createElement(j,{onChange:i,value:o.description,name:"description",buttonText:d?"Saving...":"Save",textArea:!0,onRequestCancel:n(),onRequestSuccess:u,disabledSuccessButton:o.description.length<1}):l.a.createElement("p",{className:"board-menu-sidebar__description-content"},r||"Write..."))},ot=function(){var e=Object(_.b)(),t=Object(X.g)(),a=Object(r.useState)(!1),n=s()(a,2),l=n[0],c=n[1];return{isRequesting:l,handleDeleteBoard:function(){return e(Object(N.w)({onRequest:function(){return c(!0)},onSuccessRequest:function(){c(!1),t.replace("/")}}))}}},it=function(){var e=ot(),t=e.isRequesting,a=e.handleDeleteBoard;return l.a.createElement("div",{className:"board-menu-sidebar__footer-actions"},l.a.createElement(p.a,{color:"secondary",onClick:a,startIcon:l.a.createElement(b.a.Close,null)},t?"Deleting...":"Delete board"))},st=function(){return l.a.createElement("div",{className:"board-menu-sidebar"},l.a.createElement(rt,null),l.a.createElement(ct,null),l.a.createElement(it,null))},ut=a(142),dt=function(){return l.a.createElement(ut.a,{spacing:3},l.a.createElement(ut.c,null),l.a.createElement(ut.b,null),l.a.createElement(ut.d,null,l.a.createElement(ut.b,{cols:4}),l.a.createElement(ut.b,{cols:4})))},mt=function(){return l.a.createElement("div",{className:"board-header-actions"},l.a.createElement(ut.a,{spacing:3,className:"w-48"},l.a.createElement(ut.d,null,l.a.createElement(ut.b,{cols:8}),l.a.createElement(ut.b,{cols:4}))))},bt=function(){return l.a.createElement("ul",{className:"board-lists-grid"},l.a.createElement("li",{className:"w-48 mr-4"},l.a.createElement("div",{className:"mb-4"},l.a.createElement(dt,null)),l.a.createElement("div",null,l.a.createElement(dt,null))),l.a.createElement("li",{className:"w-48"},l.a.createElement(dt,null)))},ft=function(){return l.a.createElement("section",{className:"board"},l.a.createElement(mt,null),l.a.createElement(bt,null))},pt=function(){var e=Object(X.i)().params,t=Object(_.c)((function(e){return e.board})),a=t.prevRequests,n=t.notFound,l=Object(_.b)(),c=a[e.boardId],o=Object(r.useState)((function(){return!c})),i=s()(o,2),u=i[0],d=i[1],m=function(){return d(!1)};return Object(r.useEffect)((function(){c||l(Object(N.p)(e.boardId,m))}),[]),{isFetching:u,notFound:n}},ht=function(){var e=Object(_.c)((function(e){return e.board})).error,t=Object(_.b)();return{error:e,handleClearError:function(){return t(Object(N.n)())}}};oe.a.setAppElement("#app");t.default=function(){var e=pt(),t=e.isFetching,a=e.notFound,n=J(),r=n.isOpen,c=n.handleCloseCardSelected,o=tt().isOpen,i=ht(),s=i.error,u=i.handleClearError;return a?l.a.createElement(ie.a,{severity:"info",className:"mt-24 mx-6"},"Board Not Found"):t?l.a.createElement(ft,null):l.a.createElement("section",{className:"board"},l.a.createElement(at,null),l.a.createElement(le,null),l.a.createElement(oe.a,{className:"modal modal--lg",overlayClassName:"modal__overlay",onRequestClose:c,isOpen:r},l.a.createElement($e,null)),l.a.createElement(oe.a,{className:"modal modal--lg",overlayClassName:"modal__overlay",onRequestClose:u,isOpen:!!s},l.a.createElement(ie.a,{severity:"error"},s)),o&&l.a.createElement(st,null))}}}]);