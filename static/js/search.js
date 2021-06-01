var search = instantsearch({
    searchClient: new TypesenseInstantsearchAdapter({
        server: {
            apiKey: 'egLHeOzn9OAikM8pAhcmHntIqnxsvcjb',
            nodes: [
                {
                    host: 'search.gabriele-altpeter.info',
                    port: '443',
                    protocol: 'https',
                },
            ],
        },
        additionalSearchParameters: {
            queryBy: 'name,type,code,description,categories,notes',
            sortBy: '_text_match:desc,sort-code:asc',
        },
    }).searchClient,
    indexName: slug,
    routing: true,
});

search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 10,
        facetFilters: ['leaf:true'],
    }),
    instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Kontenrahmen durchsuchen…',
        autofocus: true,
        showReset: true,
        showLoadingIndicator: true,
    }),
    instantsearch.widgets.panel({ templates: { header: 'Typen' } })(instantsearch.widgets.refinementList)({
        container: '#types',
        attribute: 'type',
        sortBy: ['count:desc', 'name:asc'],
        showMore: true,
    }),
    instantsearch.widgets.panel({ templates: { header: 'Kategorien' } })(instantsearch.widgets.hierarchicalMenu)({
        container: '#hierarchical-categories',
        attributes: [
            'hierarchicalCategories.lvl0',
            'hierarchicalCategories.lvl1',
            'hierarchicalCategories.lvl2',
            'hierarchicalCategories.lvl3',
            'hierarchicalCategories.lvl4',
            'hierarchicalCategories.lvl5',
            'hierarchicalCategories.lvl6',
        ],
        showMore: true,
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: '<div class="hit">\
          <div class="hit-content">\
            <p class="hit-type">{{#helpers.highlight}}{ "attribute": "type" }{{/helpers.highlight}}</p>\
            <h2 class="hit-name">{{#helpers.highlight}}{ "attribute": "code" }{{/helpers.highlight}} {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h2>\
            <p class="hit-description">{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>\
            <p class="hit-notes">{{#helpers.highlight}}{ "attribute": "notes" }{{/helpers.highlight}}</p>\
          </div>\
        </div>',
            empty: 'Keine Ergebnisse für die Anfrage <em>„{{query}}“</em> gefunden.',
        },
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
]);

search.start();
