import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// Follow results in `undefined` being logged to console
import { BrowserPolicy } from 'meteor/browser-policy';
console.log(BrowserPolicy);

// Following results in Cannot find module 'meteor/browser-policy-common'
// import { BrowserPolicy as BrowserPolicyCommon } from 'meteor/browser-policy-common';

// Following results in Cannot find module 'meteor/browser-policy-content'
// import { BrowserPolicy as BrowserPolicyContent } from 'meteor/browser-policy-content';

// Following results in Cannot find module 'meteor/browser-policy-framing'
// import { BrowserPolicy as BrowserPolicyFraming } from 'meteor/browser-policy-framing';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
