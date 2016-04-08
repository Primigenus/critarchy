Meteor.methods
  seedCrits: ->
    Threads.insert
      type: "critique"
      userId: Meteor.userId()
      data:
        art: [
          Uploads.findOne()._id
        ]
      createdOn: new Date()
      content: "..."
      thanks: 0

  seedPosts: ->

  seedComments: ->

  seedThanks: ->
    Thanks.insert
      userId: Meteor.userId()
      type: "crit"
      targetId: Threads.findOne()._id
      date: new Date()

  seedUploads: ->
    Uploads.insert
      userId: Meteor.userId()
      createdOn: new Date()
      downloadUrl: "https://critarchy.storage.googleapis.com/XL57b7ay2hvekDtRr/1423892215988-IMG_20140305_174423.jpg"
