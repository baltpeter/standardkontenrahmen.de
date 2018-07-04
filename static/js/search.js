var search = instantsearch({
  appId: '79DPDCGAFZ',
  apiKey: 'e15f5029b20427c824de3201b3832560',
  indexName: slug,
  urlSync: true,
  searchParameters: {
  	hitsPerPage: 10,
  	filters: "leaf:true",
  	analytics: false
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
	instantsearch.widgets.hierarchicalMenu({
	  container: '#hierarchical-categories',
	  attributes: ['hierarchicalCategories.lvl0', 'hierarchicalCategories.lvl1', 'hierarchicalCategories.lvl2', 'hierarchicalCategories.lvl3', 'hierarchicalCategories.lvl4', 'hierarchicalCategories.lvl5', 'hierarchicalCategories.lvl6'],
	  limit: 25,
	  collapsible: true,
	  templates: {
	    header: 'Kategorien'
	  },
	})
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#types',
    attributeName: 'type',
    collapsible: true,
    sortBy: ['count:desc', 'name:asc'],
    templates: {
      header: 'Typen'
    }
  })
);


search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "Keine Ergebnisse für die Anfrage <em>„{{query}}“</em> gefunden."
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.start();