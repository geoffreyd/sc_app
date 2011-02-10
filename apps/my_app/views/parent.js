// ==========================================================================
// Project:   MyApp.ParentView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
MyApp.ParentView = SC.View.extend(
/** @scope MyApp.ParentView.prototype */ {

  childViews: "labelView".w(),

  value: "",

  labelView: SC.LabelView.extend({
    valueBinding: '.parentView.value'
  }),

  render: function(context, firstTime) {
    context.push("<div class='sc-view parent-view' style='background-color:blue; top:0; bottom:0;left:0;right:0' >");
    this.renderChildViews(context, firstTime);
    context.push("</div>");
  }

});
