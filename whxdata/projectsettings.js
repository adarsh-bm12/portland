// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "PortaSwitch®_Architecture_and_Concepts/Copyright_notice.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("PortaSwitch®_Architecture_and_Concepts/Copyright_notice.htm"));
rh.consts('HOME_FILEPATH', encodeURI('PortaSwitch®_Architecture_and_Concepts/Copyright_notice.htm'));
rh.consts('START_FILEPATH', encodeURI('PortaSwitch®_Architecture_and_Concepts/Copyright_notice.htm'));
rh.consts('HELP_ID', '350b77e2-25ea-473a-ad13-0dc393f6ed4e' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "en");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"BreadcrumbStart":"Home: ","BrsNextButton":"Next","BrsPrevButton":"Previous","CloseFavorites":"Close Favorites","ContentsTab":"Contents","CookiesAcceptText":"We ask you to accept cookies for performance, readability and experience purposes. Cookies are used for bookmarking favorite topics and to restore the table of contents, index and glossary on topic change. This setting is asked only once and can be reverted by clearing the browser cookies.","CookiesAcceptButton":"Accept","CookiesDenyButton":"Later","EditFavorites":"Edit Favorites","FavoriteArticle":"saved article","FavoriteArticles":"saved articles","FullScreenButton":"Full Screen","GlossaryTab":"Glossary","GlossResultHeaderLabel":"Glossary Dictionary","HideLeftPanelTip":"Hide Left Panel","HideResults":"Hide Results","HomeButton":"Home","HomePageLogoTitle":"Logo","HomePageSubtitle":"How can we help?","IndexTab":"Index","MiniTOCCaption":"In this Topic","NoResultsFoundText":"No Results Found","PrintButtonTip":"Print","RemoveFavItem":"Remove ","RemoveHighlight":"Remove Highlight","ResultsFoundText":"%1 result(s) found for %2","SearchPlaceHolder":"Search...","SetAsFavorite":"Set as Favorite","ShowLeftPanelTip":"Show Left Panel","TOCTileArticlesCount":"article(s)","ToTopButtonTip":"Go to Top","UnsetAsFavorite":"Unset as Favorite","TopicHiddenText":"This topic is filtered out by the selected filters.","ResetFilters":"Reset Filters"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "PortaSwitch® Architecture and Concepts");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Portorange");
model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
})();
