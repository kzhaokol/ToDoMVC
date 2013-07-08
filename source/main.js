define([ 'jQuery', 'backbone', 'backbone.marionette', 'backbone.relational' ],
       function($, Backbone, Marionette, Relational) {
           var test = Backbone.Model.extend({});
           var test2 = Marionette.ItemView.extend({});

           Zoo = Backbone.RelationalModel.extend({
               relations : [ {
                   type : Backbone.HasOne,
                   key : 'animals',
                   relatedModel : 'Animal',
                   reverseRelation : {
                       key : 'livesIn',
                       includeInJSON : 'id'
                   // 'relatedModel' is automatically set to 'Zoo'; the
                   // 'relationType' to 'HasOne'.
                   }
               } ]
           });

           Animal = Backbone.RelationalModel.extend({
               urlRoot : '/animal/'
           });

           var artis = new Zoo({
               name : 'Artis'
           });
           var lion = new Animal({
               species : 'Lion',
               livesIn : artis
           });

           // `animals` in `artis` now contains `lion`
           alert(JSON.stringify(artis.get('animals')));

           return;
       });
