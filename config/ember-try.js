/*jshint node:true*/
module.exports = {
  "scenarios": [
    {
      "name": "default",
      "bower": {
        "dependencies": {}
      }
    },
    {
      "name": "ember-2.3",
      "bower": {
        "dependencies": {
          "ember": "~2.3.0"
        }
      }
    },
    {
      "name": "ember-2.4",
      "bower": {
        "dependencies": {
          "ember": "~2.4.0"
        }
      }
    },
    {
      "name": "ember-2.5",
      "bower": {
        "dependencies": {
          "ember": "~2.5.0"
        }
      }
    },
    {
      "name": "ember-2.6",
      "bower": {
        "dependencies": {
          "ember": "~2.6.0"
        }
      }
    },
    {
      "name": "ember-release",
      "bower": {
        "dependencies": {
          "ember": "components/ember#release"
        },
        "resolutions": {
          "ember": "release"
        }
      }
    },
    {
      "name": "ember-beta",
      "bower": {
        "dependencies": {
          "ember": "components/ember#beta"
        },
        "resolutions": {
          "ember": "beta"
        }
      }
    },
    {
      "name": "ember-canary",
      "bower": {
        "dependencies": {
          "ember": "components/ember#canary"
        },
        "resolutions": {
          "ember": "canary"
        }
      }
    }
  ]
};
