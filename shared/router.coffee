Router.configure
  layoutTemplate: "mainLayout"

signinFirst = ->
  unless Meteor.userId()
    @render "signinFirst"
  else
    @next()

Router.route "/", -> @render "home"

Router.route "/art", -> @render "art"
Router.route "/art/upload", (-> @render "uploadArt"), {
  onBeforeAction: signinFirst
}

Router.route "/sketchbooks", -> @render "sketchbooks"
Router.route "/sketchbook", (-> @render "mySketchbook"), {
  onBeforeAction: signinFirst
}

Router.route "/crits", -> @render "crits"

Router.route "/profile", -> @render "myProfile"

Router.route "/:username", -> @render @params.username

Router.route "/signin", -> @render "signin"
