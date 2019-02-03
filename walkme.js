/*!
 * WalkMe
 * http://www.walkme.com/
 *
 * Copyright 2012, WalkMe ltd
 */
window._walkmeInternals && _walkmeInternals.addTimeStamp && _walkmeInternals.addTimeStamp("dataCodeStart");
var wmContext;
void 0 != window.wmPreviewSnippet ? wmContext = wmPreviewSnippet.getServerSettings() : void 0 != window.wmSnippet ? wmContext = wmSnippet.getServerSettings() : window.mt_cdn_server_name && window.mt_recorder_server_name && (wmContext = window,
wmContext.cdnServerName = mt_cdn_server_name,
wmContext.recorderServer = mt_recorder_server_name);
function WalkMeDataClass() {
    var e = {
        publishDate: "2018-11-09 16:56:31",
        dataVersion: "6"
    }
      , a = {
        "Id": 165221,
        "TrianglePosition": "right-middle",
        "TriangleTheme": "black-blue",
        "ShapeType": "echosearch",
        "Player": "none",
        "Menu": "Penguin",
        "MenuDisplay": "Docked",
        "PlayerFontSize": -1,
        "LanguageId": 1,
        "ShowInUrl": null,
        "IsDisplayPoweredBy": "no",
        "PoweredByLink": false,
        "BulletType": null,
        "CustomCss": "/* Shoutout Custom Button */\n\n#wm-shoutout-30750 div.shoutout-button {\nbackground-color: rgb(27, 179, 152) !important;\nborder-bottom: 4px solid rgb(23, 154, 131) !important;\ncolor: rgb(255, 255, 255) !important;\ndisplay: inline-block !important;\nfont-weight: 700 !important;\nfont-size: 16px !important;\nborder-radius: 3px !important;\ncursor: pointer !important;\ntransition: background 200ms ease 0s !important;\npadding: 10px 16px 8px !important;\nborder-style: none none solid !important;\ndirection: ltr !important;\ntext-align: left !important;\nfloat: left !important;\nmargin: 0px 28px 0px 0px !;\nline-height: 21px !important;\nfont-family: walkme-opensans,sans-serif !important;\nvertical-align: baseline !important;\nborder-collapse: inherit !important;\nbackground-image: none !important;\nheight: auto !important;\ntext-indent: inherit !important;\nletter-spacing: normal !important;\ntext-transform: none !important;\nwidth: auto !important;\nbox-shadow: none !important;\ntext-shadow: none !important;\nborder-width: medium medium 4px !important;\nposition: static !important;\ntop: auto !important;\nleft: auto !important;\nbox-sizing: content-box !important;\nwebkit-box-sizing: border-box !important;\nmoz-box-sizing: border-box !important;\nbox-sizing: border-box !important;\n\n}\n#wm-shoutout-30750 div.shoutout-button:hover {\nbackground-color: rgb(30, 200, 170) !important;\n}\n#wm-shoutout-30750 a.walkme-custom-bbcode-link {\n\ttext-decoration: none !important;\n}\n/* Custom Shoutout End */\n\n/* Custom Font -- Start \n.walkme-custom-balloon-title,\n.walkme-custom-balloon-content{\n\tfont: open-sans,sans-serif !important;\n}\nCustom Font -- END */\n\n/* Change Widget z-index -- Start */\n\ndiv#walkme-player {\n\tz-index: 1000000000 !important;\n} \n/* Change widget z-index -- End */\n\n/* Team Page Join Yes/ No Buttons */\n.yes-button {\n  -webkit-border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n  border-radius: 3px !important;\n  font-family: Open-sans, Arial !important;\n  color: #ffffff !important;\n  font-size: 14px !important;\n  padding: 10px 10px 10px 10px !important;\n  text-decoration: none !important;\n    width: 100px !important;\n    background: #1BB398 !important;\n    text-align: center !important;\n    display: inline-block !important;\n    margin: 1em !important;\n\n}\n.yes-button:hover {\n  background: #42d4ba !important;\n  text-decoration: none !important;\n}\n\n\n.no-button {\n  -webkit-border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n  border-radius: 3px !important;\n  font-family: Arial !important;\n  color: #ffffff !important;\n  font-size: 14px !important;\n  padding: 10px 10px 10px 10px !important;\n  text-decoration: none !important;\n    width: 100px !important;\n    background: #182B37 !important;\n    text-align: center !important;\n    display: inline-block !important;\n    margin: 1em !important;\n}\n.no-button:hover {\n  background: #2F546B !important;\n  text-decoration: none !important;\n}\n/*END_ Split Buttons */\n\n\n/* Custom Balloon Font */\n\n\n.walkme-custom-balloon-title {\n\tfont-family: omnes-pro !important;\n\t\tfont-size: 16px !important;\n}\n.walkme-custom-balloon-content {\n\tfont-family: omnes-pro !important;\n\t\tfont-size: 14px !important;\n}\n\n#walkme-balloon-1930812 .walkme-custom-balloon-content,\n#walkme-balloon-1930812 .walkme-custom-balloon-title {\n\tfont-family: omnes-pro !important;\n\tfont-size: 14px !important;\n}\n/* Custom Balloon Font End */\n\n/*Custom Launcher Font */\n.walkme-custom-icon-outer-div.walkme-custom-launcher-outer-div.walkme-text-launcher {\n\tfont-family: omnes-pro !important;\n\t\tfont-weight: 500 !important;\n\t\tfont-size: 14px !important;\n}\n/* Custom Shoutout Font */\n.wm-outer-div.wm-shoutout .wm-title.wm-template-main-text, \n.wm-outer-div.wm-shoutout .wm-template-text, \n.wm-outer-div.wm-shoutout .wm-close-link,\n.wm-outer-div.wm-shoutout .wm-blue-btn.wm-template-main-bg.wm-main-bg-hover {\n\tfont-family: omnes-pro !important;\n}\n\n\n/* Custom Balloon Size */\n\n.walkme-custom-balloon-content {\n\tmin-height: 20px !important;\n}\n#walkme-balloon-44733 {\n\twidth: 310px !important;\n}\n#walkme-balloon-44733 .walkme-custom-balloon-content {\n\theight: 157px !important;\n}\n#alkme-balloon-44749 .walkme-custom-balloon-content {\n\theight: 20px !important;\n}\n#walkme-balloon-9219 .walkme-custom-balloon-content,\n#walkme-balloon-8640 .walkme-custom-balloon-content{\n\theight: 37px !important;\n}\n/* Custom Balloon Size End */\n\n/* NPS Score Survey Temp Footer Style. --- START */\n#walkme-survey-balloon-26705 {\n\ttop: 145px !important;\n\twidth: 100% !important;\n\tleft: 0px !important;\n\tright: 0px !important;\n\tbottom: 0px !important;\n\ttop: auto !important;\n\tposition: fixed !important;\n\theight: 133px !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-radiobutton,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-separator,\n#walkme-survey-balloon-26705 .walkme-survey-title,\n#walkme-survey-balloon-26705 .walkme-survey-question-count {\n\tdisplay: none !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-mid-div,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-top-div,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-top-div-bottom {\n\tbackground-color: #fff !important;\n}\n\n#walkme-survey-balloon-26705 .walkme-custom-balloon-inner-div {\n\tbackground-color: transparent !important;\n\tborder: none !important;\n\tborder-radius: 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-top-div,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-mid-div {\n\tborder-radius: 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-side-border {\n\tdisplay: none !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-title {\n\tpadding: 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-content {\n\tmargin: 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-question {\n\tpadding: 15px 15px 0px 15px !important;\n\ttext-align: center !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-question-title {\n\ttext-align: center !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-question-radiobutton-answers {\n\tline-height: 25px !important;\n\tdisplay: inline !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-radiobutton-answer {\n\tdisplay: inline !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-text {\n\tmargin: -2px -9px 0px 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-title {\n\tborder: 1px solid #172630 !important;\n\tborder-bottom: 2px solid #172630 !important;\n\tpadding: 10px 20px !important;\n\tbackground: #fff !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-title:hover {\n\tcolor: #fff !important;\n\tcursor: pointer !important;\n\tborder: 1px solid #999 !important;\n\tborder-bottom: 2px solid #172630 !important;\n\tpadding: 10px 20px !important;\n\tbackground: #172630 !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-title:active {\n\tcolor: #fff !important;\n\tcursor: pointer !important;\n\tborder: 1px solid #999 !important;\n\tborder-bottom: 2px solid #172630 !important;\n\tpadding: 10px 20px !important;\n\tbackground: #1BB398 !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-radiobutton-div.selected + .walkme-survey-answer-text {\n\tcolor: #fff !important;\n\tcursor: pointer !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-answer-radiobutton-div.selected + .walkme-survey-answer-text label.walkme-survey-answer-title {\n\tcursor: pointer !important;\n\tbackground: #1BB398 !important;\n\tcolor: #fff !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button {\n\tbackground: #19aa8d !important;\n\tmin-width: 56px !important;\n\theight: 26px !important;\n\tborder-radius: 2px !important;\n\tpadding: 0px 10px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button {\n\tmargin: 0px 17px 6px 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button:hover,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button:hover {\n\tbackground: #172630 !important;\n\tmin-width: 56px !important;\n\theight: 26px !important;\n\tborder-radius: 2px !important;\n\t\tpadding: 0px 10px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button:active,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button:active {\n    background: #1BB398 !important;\n    min-width: 56px !important;\n    height: 26px !important;\n    border-radius: 2px !important;\n\tpadding: 0px 10px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button .walkme-custom-balloon-button-text\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button .walkme-custom-balloon-button-text {\n    font-size: 14px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-next-button:hover {\n\tmargin: 4px 17px 10px 8px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-normal-button.walkme-custom-balloon-submit-button:hover,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-weak-button.walkme-custom-balloon-back-button,\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-weak-button.walkme-custom-balloon-back-button:hover  {\n\tdisplay: inline-block !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-weak-button.walkme-custom-balloon-back-button.walkme-action-back.walkme-click-and-hover \n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-weak-button.walkme-custom-balloon-back-button.walkme-action-back.walkme-click-and-hover:hover  {\n\tmargin: 15px 0 20px 0px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-buttons-wrapper {\n  width: 90px !important;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n#walkme-survey-balloon-26705 #walkme-survey-question-freetext-25502 {\n\theight: 45px !important;\n}\n#walkme-survey-balloon-26705 .walkme-custom-balloon-button.walkme-custom-balloon-weak-button.walkme-custom-balloon-back-button{\n\tdisplay: none !important;\n}\n#walkme-survey-balloon-26705 .walkme-survey-validation-errors  {\n\twidth: 200px !important;\n\tcolor: red !important;\n\tposition: absolute !important;\n\ttop: 103px !important;\n  left: 50% !important;\n}\n#walkme-survey-balloon-26705 #walkme-survey-question-freetext-48645 {\n\theight: 56px !important;\n}\n#walkme-survey-balloon-26705 .walkme-click-and-hover.walkme-custom-balloon-close-button.walkme-action-close.walkme-inspect-ignore{\n\tfont-size: 32px !important;\n}\n/*#walkme-survey-balloon-26705 .walkme-click-and-hover.walkme-custom-balloon-close-button {\n\tright: 16px !important;\n}*/\n/* NPS Score Survey Temp Footer Style. --- END */\n\n\n#walkme-tooltip-225969 .walkme-tooltip-content {\n\tfont-family: helvetica !important;\n\tfont-size: 14px !important;\n}\n.walkme-tooltip-inner-div { \nborder-left-width: 5px !important;\n}\n\n/*Shoutout width START*/\n#wm-shoutout-105049.wm-outer-div {\n\twidth: 400px !important;\n}\n\n/*smartip Customization*/\n.walkme-icon-position-smartTip-id-53536{\n\tpadding-top: 0px !important;\n\tpadding-left: 10px !important;\n\tpadding-bottom: 0px !important;\n\tpadding-right: 10px !important;\n}",
        "PlayerImageUrl": null,
        "Features": "business_solution,stickySonar,versionHistory,analyticsCustomVars   SessionTimeoutUI folderContainers  linkToApps    exportToPdf screenshotDownload activityLog MLExportSpecific   legoV3Prelib   newTriggersTransformer appsNavigatorDropdown unifiedApps integrationCenterWebhooks hideOldAnalytics analyticsAutoLogin  geWithTemplatesEnabled syncInsightsVariables sfMaxSizeEnforcer screenshotExportToFile MLExcelExportAll",
        "Settings": {
            "AGs": [],
            "screenshotMode": "0",
            "SafeStart": {},
            "displayWidgetCondition": {
                "nodeType": "And",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Func",
                    "funcName": "UrlNotContains",
                    "funcArgs": {
                        "UrlInput": "login"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "832eb9a10e9a77a6dafa47697ecda218"
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "jQueryTrue",
                    "funcArgs": {
                        "jQuerySelector": "a[data-toggle=\u0026quot;dropdown\u0026quot;]:has(i.fa-user)"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "c593d63715a36dfaecfe4814da9d7a4c"
                },
                "lastUpdateTime": "1492710888431"
            },
            "search": "1",
            "analyticsProperties": [{
                "name": "role",
                "calculationMethod": "var",
                "variable": "intercomSettings.custom_attributes.organizationId"
            }, {
                "name": "info",
                "calculationMethod": "var",
                "variable": "wm_user_role"
            }]
        },
        "TodoListSettings": {
            "isActive": "1",
            "showOnlyTasksTab": "0",
            "strikeOutCompletedTasks": "1"
        },
        "EndUserSettings": {
            "Parameters": {
                "VarName": "a[data-toggle=\u0026quot;dropdown\u0026quot;]:has(i.fa-user)"
            },
            "Method": "jquery",
            "FallbackDisabled": "False"
        },
        "DebuggerSettings": {
            "IsInPreview": "1",
            "IsInPublish": "1",
            "IsInPlay": "0"
        },
        "SmarttipSettings": {
            "Info": {
                "Icon": {
                    "Predefined": {
                        "type": "shape",
                        "data": {
                            "shape": "question",
                            "color": "16-blue"
                        }
                    }
                },
                "Tooltip": {
                    "textColor": "#000000",
                    "backColor": "#FFFFFF",
                    "borderColor": "#1A83C8"
                }
            },
            "Invalid": {
                "Icon": {
                    "Predefined": {
                        "type": "shape",
                        "data": {
                            "shape": "error",
                            "color": "16-red"
                        }
                    }
                },
                "Tooltip": {
                    "textColor": "#EF2840",
                    "backColor": "#FFFFFF",
                    "borderColor": "#EF2840"
                },
                "Highlighter": {
                    "stepHlObj": {
                        "color": "#EF2840",
                        "thickness": "1",
                        "doNotHideOnHover": "True"
                    }
                }
            },
            "Attention": {
                "Icon": {
                    "Predefined": {
                        "type": "shape",
                        "data": {
                            "shape": "round-question-mark",
                            "color": "blue"
                        }
                    }
                },
                "Tooltip": {
                    "textColor": "#EFB100",
                    "backColor": "#FFFFFF",
                    "borderColor": "#EFB100"
                },
                "Highlighter": {
                    "stepHlObj": {
                        "color": "#EFB100",
                        "thickness": "1",
                        "doNotHideOnHover": "True"
                    }
                }
            },
            "Valid": {
                "Icon": {
                    "Predefined": {
                        "type": "shape",
                        "data": {
                            "shape": "v",
                            "color": "16-green"
                        }
                    }
                },
                "Tooltip": {
                    "textColor": "#7EB900",
                    "backColor": "#FFFFFF",
                    "borderColor": "#7EB900"
                },
                "Highlighter": {
                    "stepHlObj": {
                        "color": "#7EB900",
                        "thickness": "1",
                        "doNotHideOnHover": "True"
                    }
                }
            }
        },
        "BalloonSettings": {
            "BalloonVersion": "v3",
            "StepInfoColor": "#adadad",
            "ButtonBgHoverColor": "#29485B",
            "ButtonBgClickColor": "#29485B",
            "SeparatorColor": "#e7eaee",
            "FooterTextHoverColor": "#373737",
            "FooterTextClickColor": "#118bd4",
            "XButtonColor": "#c3c3c3",
            "XButtonHoverColor": "#919191",
            "XButtonClickColor": "#464646",
            "Color": "#ffffff",
            "BalloonColor2": "#f9fafb",
            "BalloonBorderWidth": 2,
            "BalloonButtonRadius": 5,
            "BalloonRadius": 5,
            "ButtonShadowWidth": 2,
            "HeaderColor": "#373737",
            "ContentColor": "#444444",
            "ContentPosition": 0,
            "Font": "walkme-opensans, Arial",
            "ButtonBgColor": "#f15951",
            "ButtonBgColor2": "#1f99b8",
            "ButtonTextColor": "#ffffff",
            "ButtonBorderColor": "#ffffff",
            "BorderColor": "#c6c6c6",
            "FooterTextColor": "#444444",
            "HighlighterColor": "#55aaff",
            "HighlighterThickness": 1,
            "ThemeId": -1,
            "AnimationId": null,
            "Animation": {
                "Id": 3,
                "InitCSS": {
                    "margin": "-100px",
                    "display": "block"
                },
                "Properties": {
                    "margin": 0
                },
                "Options": {
                    "duration": 800,
                    "easing": "easeOutBounce"
                },
                "MetaData": {
                    "are": true
                }
            },
            "Vibrate": true,
            "AnimateFirst": true,
            "FontsData": [{
                "id": "opensans",
                "name": "opensans",
                "url": "/player/resources/fonts/opensans"
            }],
            "ShadowType": 1,
            "ShadowLevel": 1,
            "ShadowColor": "#369cd9"
        },
        "Custom": {
            "wmParser": {
                "parsersConfig": [{
                    "source": {
                        "type": "variable",
                        "name": "window.intercomSettings.created_at"
                    },
                    "operation": {
                        "type": "date",
                        "format": "unix",
                        "action": "dayUntilToday"
                    },
                    "destination": "wm_unixDate"
                }, {
                    "source": {
                        "type": "variable",
                        "name": "intercomSettings.custom_attributes.organizationId"
                    },
                    "operation": {
                        "type": "replace",
                        "regex": "\\b0\\b",
                        "with": "individual user"
                    },
                    "destination": "wm_user_role"
                }, {
                    "source": {
                        "type": "variable",
                        "name": "wm_user_role"
                    },
                    "operation": {
                        "type": "replace",
                        "regex": "^\\d*$",
                        "with": "team user"
                    },
                    "destination": "wm_user_role"
                }]
            }
        },
        "CustomHTML": [],
        "MenuOpenThemeName": "black-blue",
        "MenuClosedThemeName": "black-blue",
        "MenuOpenShapeName": "standard",
        "MenuClosedShapeName": "echosearch",
        "LibVerOnPublish": "1541347322",
        "ShowWalkMe": 1,
        "Direction": "ltr",
        "SubTitleCaption": "Please select the process you need help with:",
        "TitleCaption": "How can we help you?",
        "ClosedMenuTitle": "Need Help?",
        "SearchBoxCaption": "Type in your question...",
        "NextButtonText": "Next",
        "StepsInfoText": "",
        "WelcomeStepButtonStartText": "Start",
        "WelcomeStepButtonCancelText": "Cancel",
        "TutorialCantPlayText": "Sorry, the Walk-Thru you selected cannot run in the page you are currently in.",
        "SafeStartPopupText": "The Walk-Thru cannot be played from this page.\nShall we take you to the beginning of the process?",
        "RedirectButtonText": "Take me there!",
        "StayButtonText": "No thanks.",
        "DoneButtonText": "Done",
        "BackButtonText": "Back",
        "SubmitButtonText": "Submit",
        "NoContentMessage": "We’re sorry, we haven’t set content for this page yet...",
        "LoadingMessage": "Loading, please wait...",
        "BalloonCloseTooltip": "Stop Walk-thru",
        "ContentCloseTooltip": "Close",
        "MenuCloseTooltip": "Close",
        "SurveySingleSelectionValidationError": "Please fill in the answers",
        "ProgressBarText": "Completed",
        "NoResultsText": "We’re sorry, no results were found.",
        "HelpDeskLinkCaption": null
    }
      , t = []
      , n = [{
        "Settings": {
            "DisplayCondition": {
                "nodeType": "Func",
                "funcName": "UrlNotContains",
                "funcArgs": {
                    "UrlInput": "."
                },
                "nodeDepth": "0",
                "ConditionId": "1e271995ba16fcf3d916f3dc90f52617",
                "lastUpdateTime": "1489623200729"
            },
            "DisplayConditionEnabled": "1"
        },
        "Description": null,
        "RelatedDeployableType": 19,
        "RelatedDeployableId": 14592,
        "Goals": [{
            "Name": "Saw Welcome Shoutout",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryTrue",
                    "funcArgs": {
                        "jQuerySelector": "div#wm-shoutout-33147"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "9d1889d88826cceafe8ebc1a2c01e46c",
                    "lastUpdateTime": "1492471725304"
                }
            },
            "GoalType": 1,
            "RelatedObjectId": 40145,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 150346
        }],
        "Name": "Saw Welcome ShoutOut",
        "OrderIndex": 5.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 40145
    }, {
        "Settings": {},
        "Description": null,
        "RelatedDeployableType": 19,
        "RelatedDeployableId": 14592,
        "Goals": [{
            "Name": "Accessed Student Community",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/socialize"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "d7732be468d10362c3b23eca2af80a6f",
                    "lastUpdateTime": "1515801232458"
                }
            },
            "GoalType": 1,
            "RelatedObjectId": 71767,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 224439
        }],
        "Name": "Has Accessed the Community",
        "OrderIndex": 6.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 71767
    }, {
        "Settings": {},
        "Description": null,
        "RelatedDeployableType": 19,
        "RelatedDeployableId": 14592,
        "Goals": [{
            "Name": "Started CSA Associate Course",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/119"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "e5a6848953133b7c2e80331e9b4c034a",
                    "lastUpdateTime": "1516144153916"
                }
            },
            "GoalType": 1,
            "RelatedObjectId": 72646,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 227376
        }],
        "Name": "Started CSA Associate Course",
        "OrderIndex": 7.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 72646
    }, {
        "Settings": {},
        "Description": null,
        "RelatedDeployableType": 19,
        "RelatedDeployableId": 14592,
        "Goals": [{
            "Name": "NPS Cookie Exists",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "WalkMeDataExists",
                    "funcArgs": {
                        "DataKey": "WalkMeCookieTrue"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "b0c2cc3487d16d6be2d4781675727841",
                    "lastUpdateTime": "1521143436496"
                }
            },
            "GoalType": 1,
            "RelatedObjectId": 80319,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 246784
        }],
        "Name": "NPS Survey Cookie Confirmed",
        "OrderIndex": 8.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 80319
    }]
      , S = [{
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "15618"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See your Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Or",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Or",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Or",
                        "nodeDepth": "0",
                        "leftSon": {
                            "nodeType": "Or",
                            "nodeDepth": "0",
                            "leftSon": {
                                "nodeType": "Func",
                                "funcName": "UrlEquals",
                                "funcArgs": {
                                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/44"
                                },
                                "nodeDepth": "0",
                                "ConditionId": "ab909d8e2f56c5113b727433870c6067"
                            },
                            "rightSon": {
                                "nodeType": "Func",
                                "funcName": "UrlEquals",
                                "funcArgs": {
                                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/45"
                                },
                                "nodeDepth": "0",
                                "ConditionId": "600963f1e428b10e7a02a8920af88f69"
                            }
                        },
                        "rightSon": {
                            "nodeType": "Func",
                            "funcName": "UrlEquals",
                            "funcArgs": {
                                "UrlInput": "https://linuxacademy.com/cp/modules/view/id/12"
                            },
                            "nodeDepth": "0",
                            "ConditionId": "26302f65684e28420f17e7b38b01bd1d"
                        }
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/modules/view/id/91"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "fd9cd715c4095b60b0e946fa1dcf493c"
                    }
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/119"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "73c64b1a7997696e776eda0a360561e5"
                },
                "lastUpdateTime": "1492190322599"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - AWS - Master Level",
        "OrderIndex": 2.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 89438
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16571"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/11"
                },
                "nodeDepth": "0",
                "ConditionId": "0ee426ae402c4df892b53279c4c82c67",
                "lastUpdateTime": "1491335263819"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - AWS DevOps Engineer",
        "OrderIndex": 3.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91137
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16572"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/39"
                },
                "nodeDepth": "0",
                "ConditionId": "23d348ffad264c8382b7fa4827f24910",
                "lastUpdateTime": "1491335287571"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Linux System Administrator/Enginee",
        "OrderIndex": 4.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91145
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16582"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/50"
                },
                "nodeDepth": "0",
                "ConditionId": "6b9a122543264bc28905db9a2f4f001d",
                "lastUpdateTime": "1491335311535"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Linux System Admin - Snr Level",
        "OrderIndex": 5.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91146
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16573"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Or",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/1"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "f4ac3625915b4d16a004c2be22f9bc50"
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/2"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "31521ea2fb92d1315a6ebf35f505dc92"
                },
                "lastUpdateTime": "1491335335581"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Linux Professional Institute Cert",
        "OrderIndex": 6.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91147
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16574"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/38"
                },
                "nodeDepth": "0",
                "ConditionId": "cddfa208344543688fb3770ca053e258",
                "lastUpdateTime": "1491335395524"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Linux System Admin - Entry Level",
        "OrderIndex": 7.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91149
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16575"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/68"
                },
                "nodeDepth": "0",
                "ConditionId": "b1fb5a4b220f423b9f8bbae7fa9978d0",
                "lastUpdateTime": "1491335373813"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Linux System Admin - Mid Level",
        "OrderIndex": 8.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91150
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16576"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/34"
                },
                "nodeDepth": "0",
                "ConditionId": "1f66b04ed98e43468575f7e13b70b69b",
                "lastUpdateTime": "1490819632192"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - DevOps Engineer - Mid Level",
        "OrderIndex": 9.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91151
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16577"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/33"
                },
                "nodeDepth": "0",
                "ConditionId": "337e73b4a9224d92b936134bf63fb310",
                "lastUpdateTime": "1490819681619"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Docker Deep Dive",
        "OrderIndex": 10.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91152
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16578"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/71"
                },
                "nodeDepth": "0",
                "ConditionId": "9e38575d16d348a99d6e3f66e9df62a3",
                "lastUpdateTime": "1490819739368"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - DevOps Engineer - Senior Level",
        "OrderIndex": 11.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91153
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16579"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/36"
                },
                "nodeDepth": "0",
                "ConditionId": "75161c1f9e974d928b1aa995148eae33",
                "lastUpdateTime": "1490819783961"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - Cloud Developer",
        "OrderIndex": 12.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91154
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16580"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/120"
                },
                "nodeDepth": "0",
                "ConditionId": "5324de101d784bdab9a722077948cc24",
                "lastUpdateTime": "1490819832277"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - OpenStack Systems Admin - Snr Lvl",
        "OrderIndex": 13.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91155
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playShuttle",
                "arguments": {
                    "shuttleId": "16581"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "76509",
                    "customText": "See the Learning Path!",
                    "customClass": "custom-launcher-76509"
                }
            },
            "version": "2",
            "leftOffset": "-3",
            "topOffset": "0",
            "context": "1",
            "tooltip": "Choose your learning path!",
            "isSticky": "1",
            "condHide": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "/cp/modules/view/id/90"
                },
                "nodeDepth": "0",
                "ConditionId": "b14015a75d4a44c29df5f4850575a6ef",
                "lastUpdateTime": "1490819882193"
            },
            "z-index": "1000",
            "stickinessType": "1"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[5]/a[1]",
                "elementAbsX": 990.5,
                "elementAbsY": 920.4833374023438,
                "bodyWidth": 1529,
                "bodyHeight": 791,
                "elementHeight": 27,
                "elementWidth": 328,
                "elementClass": "course-feature-link",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/modules/view/id/44"
                },
                "relativeLeft": 990.5,
                "centeredElementWidth": 1529,
                "textArray": ["learningpaths"],
                "autoQuery": "DIV[id=\"accordion\"] A",
                "class": "course-feature-link",
                "href": "https://www.youtube.com/embed/hPD5UVBpj-8",
                "data-toggle": "modal",
                "data-target": "#modalCourseFeature",
                "onclick": "return flase;"
            },
            "IsJquerySelector": true,
            "JquerySelector": "a.course-feature-link:contains(\"Learning Paths\")"
        },
        "Name": "Learning Path - MCSA: Cloud Platform Certification",
        "OrderIndex": 14.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 91156
    }, {
        "Host": "linuxacademy.com",
        "Position": 1,
        "Settings": {
            "action": {
                "actionType": "playBf",
                "arguments": {
                    "bfId": "14592",
                    "playBfFromBeginning": "1",
                    "shuttleId": "53131"
                }
            },
            "imageObject": {
                "type": "customText",
                "data": {
                    "id": "79026",
                    "customText": "Start a Course",
                    "customClass": "custom-launcher-79026"
                }
            },
            "version": "2",
            "leftOffset": "-43",
            "topOffset": "0",
            "isSticky": "1",
            "stickinessType": "1",
            "context": "1",
            "PlayLauncherConditionTree": {
                "nodeType": "And",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "/cp/dashboard"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "f0dd0c99a9865952782411f735905f3b"
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "jQueryFalse",
                    "funcArgs": {
                        "jQuerySelector": "a.dashboard-recent-course-link"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "b7e79c38e364a26c25dd47654f82d725"
                },
                "lastUpdateTime": "1491508453272"
            },
            "z-index": "0"
        },
        "PageId": null,
        "IdentifySettings": {
            "StepSensitivity": 1,
            "IsJquerySelector": true,
            "JquerySelector": "div.col-xs-12:has(div#panel1) div.panel-heading",
            "IgnorePosition": 0,
            "ElementDescription": {
                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]",
                "elementAbsX": 355.5,
                "elementAbsY": 337.33331298828125,
                "bodyWidth": 1849,
                "bodyHeight": 971,
                "elementHeight": 43,
                "elementWidth": 718,
                "elementClass": "panel-heading",
                "elementText": "",
                "elementLocation": {
                    "hostname": "linuxacademy.com",
                    "pathname": "/cp/dashboard"
                },
                "relativeLeft": 355.5,
                "centeredElementWidth": 1849,
                "textArray": ["recentcourses", "continuewhereyouleftoff"],
                "autoQuery": "DIV",
                "data-toggle": "collapse",
                "data-target": "#panel1",
                "class": "panel-heading",
                "aria-expanded": "true"
            }
        },
        "Name": "Start a Course",
        "OrderIndex": 15.00000,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 92110
    }]
      , i = [{
        "Id": 74172,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Create a Course Schedule",
        "Css": ".custom-launcher-74172 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #29485B;\n\tborder-color: #168dce;\n\tborder-radius: 5px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 6px;\n\tpadding-right: 7px;\n\tpadding-bottom: 6px;\n\tpadding-left: 7px;\n}.custom-launcher-74172:hover {\n\tcolor: #ffffff;\n\tbackground-color: #1bb398;\n\tborder-color: #189be3;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-74172:active {\n\tcolor: #ffffff;\n\tbackground-color: #2d4f64;\n\tborder-color: #189be3;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 76509,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "See the Learning Path!",
        "Css": ".custom-launcher-76509 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #f15951;\n\tborder-color: #E8110C;\n\tborder-radius: 4px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 8px;\n\tpadding-right: 7px;\n\tpadding-bottom: 8px;\n\tpadding-left: 7px;\n}.custom-launcher-76509:hover {\n\tcolor: #ffffff;\n\tbackground-color: #BB3F38;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-76509:active {\n\tcolor: #ffffff;\n\tbackground-color: #ff6259;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 77810,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Check out the hands-on labs!",
        "Css": ".custom-launcher-77810 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #f15951;\n\tborder-color: #E8110C;\n\tborder-radius: 4px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 8px;\n\tpadding-right: 7px;\n\tpadding-bottom: 8px;\n\tpadding-left: 7px;\n}.custom-launcher-77810:hover {\n\tcolor: #ffffff;\n\tbackground-color: #BB3F38;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-77810:active {\n\tcolor: #ffffff;\n\tbackground-color: #ff6259;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 77999,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Create a Course Schedule",
        "Css": ".custom-launcher-77999 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #29485B;\n\tborder-color: #168dce;\n\tborder-radius: 5px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 6px;\n\tpadding-right: 7px;\n\tpadding-bottom: 6px;\n\tpadding-left: 7px;\n}.custom-launcher-77999:hover {\n\tcolor: #ffffff;\n\tbackground-color: #1bb398;\n\tborder-color: #189be3;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-77999:active {\n\tcolor: #ffffff;\n\tbackground-color: #2d4f64;\n\tborder-color: #189be3;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 78003,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Check out the hands-on labs!",
        "Css": ".custom-launcher-78003 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #1BB398;\n\tborder-color: #1BB399;\n\tborder-radius: 4px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 8px;\n\tpadding-right: 7px;\n\tpadding-bottom: 8px;\n\tpadding-left: 7px;\n}.custom-launcher-78003:hover {\n\tcolor: #ffffff;\n\tbackground-color: #42d4ba;\n\tborder-color: #1BB398;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-78003:active {\n\tcolor: #ffffff;\n\tbackground-color: #1BB398;\n\tborder-color: #1BB398;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 78772,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "?",
        "Css": ".custom-launcher-78772 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #1BB398;\n\tborder-color: #ffffff;\n\tborder-radius: 15px;\n\tborder-width: 2px;\n\tborder-style: solid;\n\tpadding-top: 4px;\n\tpadding-right: 12px;\n\tpadding-bottom: 4px;\n\tpadding-left: 12px;\n}.custom-launcher-78772:hover {\n\tcolor: #ffffff;\n\tbackground-color: #1ec5a7;\n\tborder-color: #ffffff;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-78772:active {\n}",
        "Alt": null
    }, {
        "Id": 79026,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Start a Course",
        "Css": ".custom-launcher-79026 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: #fff;\n\tbackground-color: #f15951;\n\tborder-color: #E8110C;\n\tborder-radius: 4px;\n\tborder-width: 0px;\n\tborder-style: solid;\n\tpadding-top: 8px;\n\tpadding-right: 7px;\n\tpadding-bottom: 8px;\n\tpadding-left: 7px;\n}.custom-launcher-79026:hover {\n\tcolor: #ffffff;\n\tbackground-color: #BB3F38;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-79026:active {\n\tcolor: #ffffff;\n\tbackground-color: #ff6259;\n\tborder-color: #ff130d;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}",
        "Alt": null
    }, {
        "Id": 82114,
        "UserId": 163776,
        "Url": null,
        "Hover": null,
        "Click": null,
        "CustomText": "Walk Me Through",
        "Css": ".custom-launcher-82114 {\n\tfont-weight: normal;\n\tfont-style: normal;\n\tline-height: normal;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tfont-family: \"walkme-opensans\";\n\tcolor: transparent;\n\tbackground-color: #30afe6;\n\tborder-color: #168dce;\n\tborder-radius: 2px;\n\tborder-width: 1px;\n\tborder-style: solid;\n\tpadding-top: 13px;\n\tpadding-right: 9px;\n\tpadding-bottom: 13px;\n\tpadding-left: 9px;\n}.custom-launcher-82114:hover {\n\tcolor: transparent;\n\tbackground-color: #35c1fd;\n\tborder-color: #189be3;\n\tfont-weight: normal;\n\tfont-style: normal;\n\ttext-decoration: none;\n}.custom-launcher-82114:active {\n}",
        "Alt": null
    }, {
        "Id": 82685,
        "UserId": 163776,
        "Url": "https://d2qhvajt3imc89.cloudfront.net/customers/Linux/join_now_invisible.png",
        "Hover": "https://d2qhvajt3imc89.cloudfront.net/customers/Linux/join_now.png",
        "Click": "https://d2qhvajt3imc89.cloudfront.net/customers/Linux/join_now_invisible.png",
        "CustomText": null,
        "Css": null,
        "Alt": null
    }]
      , r = []
      , s = []
      , o = []
      , _ = [{
        "Id": 26705,
        "Settings": {
            "repeat": "visit",
            "fadeBackground": 0,
            "shouldShowOneByOne": 1,
            "shouldShowOneByOneCount": 1,
            "ASRep": "once"
        },
        "Questions": [{
            "Id": 48534,
            "Settings": {},
            "Title": "How likely are you to recommend Linux Academy to a colleague?",
            "SubTitle": null,
            "Answers": [{
                "Id": 88322,
                "Title": "0 - Not at all",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 0,
                "Settings": {}
            }, {
                "Id": 88323,
                "Title": "1",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 1,
                "Settings": {}
            }, {
                "Id": 88324,
                "Title": "2",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 2,
                "Settings": {}
            }, {
                "Id": 88325,
                "Title": "3",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 3,
                "Settings": {}
            }, {
                "Id": 88326,
                "Title": "4",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 4,
                "Settings": {}
            }, {
                "Id": 88327,
                "Title": "5",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 5,
                "Settings": {}
            }, {
                "Id": 88328,
                "Title": "6",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 6,
                "Settings": {}
            }, {
                "Id": 88329,
                "Title": "7",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 7,
                "Settings": {}
            }, {
                "Id": 88330,
                "Title": "8",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 8,
                "Settings": {}
            }, {
                "Id": 88331,
                "Title": "9",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 9,
                "Settings": {}
            }, {
                "Id": 88332,
                "Title": "10 - Extremely Satisified",
                "SubTitle": "",
                "SurveyQuestionId": 48534,
                "AnswerIndex": 10,
                "Settings": {}
            }],
            "QuestionType": 1,
            "SurveyId": 26705,
            "QuestionIndex": 0,
            "LowScoreText": null,
            "HighScoreText": null
        }, {
            "Id": 48645,
            "Settings": {},
            "Title": "What is the most important reason for your score?",
            "SubTitle": null,
            "Answers": [],
            "QuestionType": 0,
            "SurveyId": 26705,
            "QuestionIndex": 1,
            "LowScoreText": null,
            "HighScoreText": null
        }],
        "Guid": "b0567a2966014086859f6b830033d62c",
        "OrderIndex": 0.00000,
        "Name": "NPS Survey"
    }]
      , l = []
      , T = []
      , m = [{
        "CollectionType": 0,
        "CollectionDeployables": ["19", "0", "9", "7"],
        "LinkedDeployables": [{
            "DeployableID": 14592,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404189
        }, {
            "DeployableID": 14599,
            "DeployableType": 19,
            "OrderIndex": 1,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404190
        }, {
            "DeployableID": 14620,
            "DeployableType": 19,
            "OrderIndex": 2,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404191
        }, {
            "DeployableID": 14626,
            "DeployableType": 19,
            "OrderIndex": 3,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404192
        }, {
            "DeployableID": 15095,
            "DeployableType": 19,
            "OrderIndex": 4,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404193
        }, {
            "DeployableID": 198876,
            "DeployableType": 19,
            "OrderIndex": 5,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9404194
        }, {
            "DeployableID": 225913,
            "DeployableType": 19,
            "OrderIndex": 6,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9481221
        }, {
            "DeployableID": 225916,
            "DeployableType": 19,
            "OrderIndex": 7,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9481224
        }, {
            "DeployableID": 61039,
            "DeployableType": 9,
            "OrderIndex": 8,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 11329718
        }, {
            "DeployableID": 61040,
            "DeployableType": 9,
            "OrderIndex": 9,
            "RelatedObjectId": 139424,
            "groupId": 139424,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 11330291
        }],
        "Settings": {
            "DeployableTypes": ["19", "0", "9", "7"],
            "CollectionType": "0",
            "default": "1"
        },
        "GroupType": 2,
        "Name": "Help",
        "OrderIndex": 0.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 139424
    }, {
        "CollectionType": 1,
        "CollectionDeployables": ["1"],
        "LinkedDeployables": [],
        "Settings": {
            "DeployableTypes": ["1"],
            "CollectionType": "1",
            "default": "0"
        },
        "GroupType": 2,
        "Name": "Tasks",
        "OrderIndex": 1.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 139425
    }]
      , w = [{
        "Description": "Shuttle to Course Schedule Creation Wizard",
        "DestinationUrl": "https://linuxacademy.com/cp/coursescheduler/create",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": ["Schedule", "Course Schedule"],
        "Goals": [],
        "Name": "Create Course Schedule",
        "OrderIndex": 0,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 15032
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/library/catalog/view/LiveLabs",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [],
        "Name": "Hands-on Labs Main Page",
        "OrderIndex": 1,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 15267
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [],
        "Name": "Learning Paths Main Page",
        "OrderIndex": 2,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 15268
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/252",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/252"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "60256d871cecfc2d00a4a29bca347aee"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "5cbec13c17b374825bf3a9c68b962590"
                    },
                    "lastUpdateTime": "1491515676007"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 15618,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154549
        }],
        "Name": "Amazon Web Services - Master Level",
        "OrderIndex": 3,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 15618
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/127",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/127"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "06bb5e9fbc999f15e6a75fb1d1f3f2cf"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClickedSticky",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "9604f6767c0ed536a1a774e5d381c94d"
                    },
                    "lastUpdateTime": "1491515744890"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16571,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154551
        }],
        "Name": "AWS DevOps Engineer",
        "OrderIndex": 4,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16571
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/202",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/202"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "08afbcf5af679b332dfe00a827273e16"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "67bdd1e045fcaba66e0e5c0d4cb5af91"
                    },
                    "lastUpdateTime": "1494004005797"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16572,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154552
        }],
        "Name": "Linux System Administrator/Engineer - Mid Level",
        "OrderIndex": 5,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16572
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/774",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/774"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "871542ca7dbf63b45f761420bc77c612"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "6f3f2254ce615d9d552161415417e76d"
                    },
                    "lastUpdateTime": "1491515857976"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16573,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154553
        }],
        "Name": "Linux Professional Institute Certifications Track",
        "OrderIndex": 6,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16573
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/204",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/204"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "551a3c0208a7bb8ab297b36f6fe24e63"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "04c2870f5a6ac517defcbeba015b8b0b"
                    },
                    "lastUpdateTime": "1491515900652"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16582,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154554
        }],
        "Name": "Senior Level - Linux System Administrator/Engineer",
        "OrderIndex": 7,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16582
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/200",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/200"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "51bb83cdb49e8d258d3d74801c24524b"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "4cf1c8376ad7b528384360a36601793a"
                    },
                    "lastUpdateTime": "1491515950146"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16574,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154555
        }],
        "Name": "Entry Level - Linux System Administrator/Engineer",
        "OrderIndex": 8,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16574
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/201",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/201"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "002ec1eaf6c818fe238ffea4ac1b1be8"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "e9d5e45e44a85d4ba85a74248b9d39f1"
                    },
                    "lastUpdateTime": "1491516040450"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16575,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154556
        }],
        "Name": "Mid Level - Linux System Administrator/Engineer",
        "OrderIndex": 9,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16575
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/206",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/206"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "5afb413cafc8caadda17d27256b0ab7d"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "b4e62b00205defc1ee527b92ac942b0e"
                    },
                    "lastUpdateTime": "1491516078607"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16576,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154557
        }],
        "Name": "DevOps Engineer - Mid Level",
        "OrderIndex": 10,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16576
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/423",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/423"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "55f79a78890ec18ff44902dac3147796"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "616c3f1851013c20862d167427f56ac4"
                    },
                    "lastUpdateTime": "1491516151424"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16577,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154559
        }],
        "Name": "Docker Deep Dive",
        "OrderIndex": 11,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16577
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/207",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/207"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "f3855f463851ce53f020a3726ee81b95"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "c895dbe70f571bb9594129bbb073cc1e"
                    },
                    "lastUpdateTime": "1491516188497"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16578,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154560
        }],
        "Name": "DevOps Engineer - Senior Level",
        "OrderIndex": 12,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16578
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/190",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/190"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "f5311e6122dce60afc51eb45ddf7d9e3"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "80b11d4bae1f12d24398c20e444ca077"
                    },
                    "lastUpdateTime": "1491516229311"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16579,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154561
        }],
        "Name": "Cloud Developer",
        "OrderIndex": 13,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16579
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/199",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/199"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "538e876dc19a6f2347450f43f01038ed"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "45bf48d98d411700f26a4df5e594267f"
                    },
                    "lastUpdateTime": "1491516267818"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16580,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154562
        }],
        "Name": "OpenStack Systems Administrator - Senior Level",
        "OrderIndex": 14,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16580
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/learningpaths/preview/id/749",
        "Settings": {
            "ShuttlePlayMode": "2"
        },
        "Keywords": [],
        "Goals": [{
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/learningpaths/preview/id/749"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "fb22aaac844cddba2386a3bf7e478a81"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.learning-paths-enroll-btn a.btn.btn-la"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "78330126ba75b22bb8e8d1420984f9dc"
                    },
                    "lastUpdateTime": "1491516302561"
                }
            },
            "GoalType": 9,
            "RelatedObjectId": 16581,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false,
            "Id": 154563
        }],
        "Name": "MCSA: Cloud Platform Certification",
        "OrderIndex": 15,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 16581
    }, {
        "Description": null,
        "DestinationUrl": "https://linuxacademy.com/cp/library/catalog/view/LiveLabs",
        "Settings": {
            "ShuttlePlayMode": "3"
        },
        "Keywords": [],
        "Goals": [],
        "Name": "Take us to LiveLabs",
        "OrderIndex": 17,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 61039
    }, {
        "Description": null,
        "DestinationUrl": "https://beta.linuxacademy.com/#/activities",
        "Settings": {
            "ShuttlePlayMode": "3"
        },
        "Keywords": [],
        "Goals": [],
        "Name": "Paid Version livelabs",
        "OrderIndex": 18,
        "PublishStatus": 1,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 61040
    }]
      , d = [{
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Or",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Or",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Or",
                        "nodeDepth": "0",
                        "leftSon": {
                            "nodeType": "Or",
                            "nodeDepth": "0",
                            "leftSon": {
                                "nodeType": "Func",
                                "funcName": "UrlEquals",
                                "funcArgs": {
                                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/44"
                                },
                                "nodeDepth": "0",
                                "ConditionId": "88d6c9e7f5364c848cb8848afddf1ec6"
                            },
                            "rightSon": {
                                "nodeType": "Func",
                                "funcName": "UrlEquals",
                                "funcArgs": {
                                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/45"
                                },
                                "nodeDepth": "0",
                                "ConditionId": "1be630089f76656081a4296d3244dedf"
                            }
                        },
                        "rightSon": {
                            "nodeType": "Func",
                            "funcName": "UrlEquals",
                            "funcArgs": {
                                "UrlInput": "https://linuxacademy.com/cp/modules/view/id/12"
                            },
                            "nodeDepth": "0",
                            "ConditionId": "77defe19b8740f4e546bf2bc117e2268"
                        }
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "UrlEquals",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/cp/modules/view/id/91"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "75b4ad38360f0f4251973403fbf6b5f1"
                    }
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/119"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "fb16633eac41996390ee9daf121971f0"
                },
                "lastUpdateTime": "1492189487269"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 61263,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "15618"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 31141
        }, {
            "ShouldDelete": false,
            "Id": 61264,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 31141
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 31141,
        "OrderIndex": 6,
        "Name": "Learning Path  - AWS Master Level"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/11"
                },
                "nodeDepth": "0",
                "ConditionId": "057cc25dcc6c453e8ef2bcb10105b0cf",
                "lastUpdateTime": "1491331295893"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62985,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16571"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32002
        }, {
            "ShouldDelete": false,
            "Id": 62986,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32002
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32002,
        "OrderIndex": 7,
        "Name": "Learning Path  - AWS DevOps Engineer"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/39"
                },
                "nodeDepth": "0",
                "ConditionId": "4021fe53a2ea4270a56259b7cca48164",
                "lastUpdateTime": "1491331283618"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62987,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16572"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32003
        }, {
            "ShouldDelete": false,
            "Id": 62988,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32003
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32003,
        "OrderIndex": 8,
        "Name": "Learning Path  - Linux System Admin/Engineer - Mid"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/50"
                },
                "nodeDepth": "0",
                "ConditionId": "fc612af7e6f84db9a30d4d7a2603b34d",
                "lastUpdateTime": "1491335103674"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62991,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16582"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32005
        }, {
            "ShouldDelete": false,
            "Id": 62992,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32005
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32005,
        "OrderIndex": 9,
        "Name": "Learning Path  - Linux System Admin (Snr level)"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Or",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/1"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "01b2a9ccb4fc47feb6108a9ba619eb5e"
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "UrlEquals",
                    "funcArgs": {
                        "UrlInput": "https://linuxacademy.com/cp/modules/view/id/2"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "16c8c2ca57c815e7ad145f5f410306ce"
                },
                "lastUpdateTime": "1491330950524"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62995,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16573"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32007
        }, {
            "ShouldDelete": false,
            "Id": 62996,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32007
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32007,
        "OrderIndex": 10,
        "Name": "Learning Path  - Linux Professional Institute Cert"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlEquals",
                "funcArgs": {
                    "UrlInput": "https://linuxacademy.com/cp/modules/view/id/38"
                },
                "nodeDepth": "0",
                "ConditionId": "eb158893efa641878174805b1f4c93da",
                "lastUpdateTime": "1491331366801"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62997,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16574"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32008
        }, {
            "ShouldDelete": false,
            "Id": 62998,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32008
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32008,
        "OrderIndex": 11,
        "Name": "Learning Path  - Linux System Admin (Entry Lvl)"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/68"
                },
                "nodeDepth": "0",
                "ConditionId": "4f325cab466846e2ad78b5a8cc2b30b3",
                "lastUpdateTime": "1490812703453"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 62999,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16575"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32009
        }, {
            "ShouldDelete": false,
            "Id": 63000,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32009
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32009,
        "OrderIndex": 12,
        "Name": "Learning Path  - Linux System Admin (Mid Lvl)"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/34"
                },
                "nodeDepth": "0",
                "ConditionId": "2ffa5c9af68449fda10e56e93a41a268",
                "lastUpdateTime": "1490812827745"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63001,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16576"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32010
        }, {
            "ShouldDelete": false,
            "Id": 63002,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32010
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32010,
        "OrderIndex": 13,
        "Name": "Learning Path  - DevOps Engineer - Mid Level"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/71"
                },
                "nodeDepth": "0",
                "ConditionId": "1d7bb89be8e4422bb9bc2fbf85e3abe1",
                "lastUpdateTime": "1490812885203"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63003,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16578"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32011
        }, {
            "ShouldDelete": false,
            "Id": 63004,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32011
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32011,
        "OrderIndex": 14,
        "Name": "Learning Path  - DevOps Engineer - Senior Level"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/33"
                },
                "nodeDepth": "0",
                "ConditionId": "fee9033a54a049e99bb24d458407f9ac",
                "lastUpdateTime": "1490812918092"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63005,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16577"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32012
        }, {
            "ShouldDelete": false,
            "Id": 63006,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32012
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32012,
        "OrderIndex": 15,
        "Name": "Learning Path  - Docker Deep Dive"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/36"
                },
                "nodeDepth": "0",
                "ConditionId": "3a3735013b114e3390d5df46d4e658d8",
                "lastUpdateTime": "1490812962211"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63007,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16579"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32013
        }, {
            "ShouldDelete": false,
            "Id": 63008,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32013
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32013,
        "OrderIndex": 16,
        "Name": "Learning Path  - Cloud developer"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/120"
                },
                "nodeDepth": "0",
                "ConditionId": "01702d4b50f74bc4bb61f0966900f99f",
                "lastUpdateTime": "1490813026586"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63009,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16580"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32014
        }, {
            "ShouldDelete": false,
            "Id": 63010,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32014
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32014,
        "OrderIndex": 17,
        "Name": "Learning Path  - OpenStack Admin - Snr level"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [],
        "Title": "Ready to get serious?",
        "Description": "This course is part of a Learning Path, a group of courses designed to give you the skills to become the expert, not just learn from them.",
        "Settings": {
            "position": "6",
            "marginV": "20",
            "marginH": "40",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "Func",
                "funcName": "UrlContains",
                "funcArgs": {
                    "UrlInput": "cp/modules/view/id/90"
                },
                "nodeDepth": "0",
                "ConditionId": "7935c70c15804773bf5ed477e8496b35",
                "lastUpdateTime": "1490813077295"
            },
            "stopOn": {
                "action": "True"
            },
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            }
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 12,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63011,
            "Text": "Find your learning path",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "16581"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32015
        }, {
            "ShouldDelete": false,
            "Id": 63012,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32015
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32015,
        "OrderIndex": 18,
        "Name": "Learning Path  - MCSA: Cloud Platform Cert"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [{
            "Id": 154532,
            "Name": "Clicked Share",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "cp/socialize"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "6c9319ce4bdd84e79496627dbe9bc0f6"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "div.feed-post-btn-holder button.feed-post-btn"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "6817c1175d7424746b6fbbebb5c34566"
                    },
                    "lastUpdateTime": 1491509344781
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 32489,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Title": "Welcome to the Community!",
        "Description": "[div style=&quot;text-align: center !important;&quot;][size=20]Click Get Started to share your experience or ask a question.[/size][/div]",
        "Settings": {
            "position": "0",
            "marginV": "20",
            "marginH": "40",
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#1BB398"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#1BB398"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#179a83"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1ec8aa"
                        }
                    }
                }
            },
            "ASEnabled": "1",
            "ASRep": "once",
            "stopOn": {
                "x": "True",
                "close": "True"
            },
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "And",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "https://linuxacademy.com/cp/socialize"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "26e1d7424eddb40ce22a94b4c98b7e50"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryFalse",
                        "funcArgs": {
                            "jQuerySelector": "div#walkme-balloon-6268"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "f21dd781eeb8f1b837151eaffcf6c39b"
                    }
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "jQueryFalse",
                    "funcArgs": {
                        "jQuerySelector": "div#walkme-balloon-10288"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "3fd447fd3263b347ef18dd7d183ab6ab"
                },
                "lastUpdateTime": "1508130934577"
            },
            "v": "1"
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 8,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 63959,
            "Text": "Get Started",
            "Type": "playBf",
            "Args": {
                "bfId": "198876",
                "playBfFromBeginning": "1"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32489
        }, {
            "ShouldDelete": false,
            "Id": 63960,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 32489
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 32489,
        "OrderIndex": 20,
        "Name": "Welcome to the Community"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [{
            "Id": 353691,
            "Name": "S3 Essentials- Lifecycle policy clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Lifecycle)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "32d767796d083664d8cdf53a130e6914",
                    "lastUpdateTime": 1541017196599
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127308,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353692,
            "Name": "S3 Essentials Versioning clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Versioning)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "007cdeabb68bde4809d4ea6b0d538e90",
                    "lastUpdateTime": 1541017289745
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127308,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Title": "Welcome to Linux Academy",
        "Description": "[div style=&quot;text-align: center;&quot;][img=200x200]https://linuxacademy.com/blog/wp-content/uploads/2016/03/mrpinehead.png[/img]\n[size=20][b][size=14]Gain practical skills in real environments with hands-on Learning Activities[/size][/b]\n[/size]\n[div style=&quot;text-align: center;&quot;][div style=&quot;text-align: left;&quot;][ul][li][url=https://linuxacademy.com/cp/livelabs/view/id/12 target=&quot;_blank&quot;]S3 Essentials - Lifecycle Policies[/url]​[/li][li][url=https://linuxacademy.com/cp/livelabs/view/id/2 target=&quot;_blank&quot;]S3 Essentials and Versioning[/url][/li][/ul][/div][/div][/div]",
        "Settings": {
            "position": "8",
            "overlay": {
                "opct": "0.7"
            },
            "marginV": "20",
            "marginH": "40",
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#182B37"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#182B37"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#182B37"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#182B37"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#182B37"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#182B37"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#15252f"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1b303e"
                        }
                    },
                    ".wm-template-text, .wm-template-text *": {
                        "attributes": {
                            "color": "#182B37"
                        }
                    }
                }
            },
            "ASEnabled": "1",
            "ASRep": "once",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "And",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "/cp/dashboard"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "96b67beb03844eb3aeda095f255e05b5"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "UrlNotContains",
                        "funcArgs": {
                            "UrlInput": "/cp/login"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "328f4bf1e68e4eafb679a78c5eb92cba"
                    }
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "jQueryFalse",
                    "funcArgs": {
                        "jQuerySelector": "a.dashboard-recent-course-link"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "65d200df650a4eabad8003ca4a55b20f"
                },
                "lastUpdateTime": "1509558121352"
            },
            "stopOn": {
                "action": "True",
                "x": "True"
            },
            "v": "1"
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 8,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 253587,
            "Text": "[url=https://beta.linuxacademy.com/#/activities target=&quot;_blank&quot;]See Full List of Learning Activities[/url]",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "61039"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 127308
        }, {
            "ShouldDelete": false,
            "Id": 253588,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": false,
            "RelatedObjectType": 14,
            "RelatedObjectId": 127308
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 127308,
        "OrderIndex": 25,
        "Name": "Mock- Welcome to Linux Academy (Community Editio"
    }, {
        "ShouldDelete": false,
        "PublishStatus": 2,
        "IsModified": false,
        "Goals": [{
            "Id": 353695,
            "Name": "Building a Three Tier Network VPC From Scratch in AWS​ clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Building a Three Tier Network VPC From Scratch in AWS​)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "9d6fdb46005c17044b81003235a241e2",
                    "lastUpdateTime": 1541017725370
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353704,
            "Name": "AWS EC2 Connectivity Troubleshooting Scenario",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(AWS EC2 Connectivity Troubleshooting Scenario)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "15fd1becf1d061cb6bcb771fefaf92ec",
                    "lastUpdateTime": 1541017778779
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353705,
            "Name": "Creating a DynamoDB Table inside the AWS Console clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Creating a DynamoDB Table inside the AWS Console)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "7140a723211788672043ed1283177af7",
                    "lastUpdateTime": 1541017881447
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353706,
            "Name": "Creating and Subscribing to AWS SNS Topics clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Creating and Subscribing to AWS SNS Topics)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "d55152d6b40e80cfc623785cc1c559ad",
                    "lastUpdateTime": 1541017933452
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353707,
            "Name": "Disaster Recovery Preparedness with AWS CloudFormation​",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(Disaster Recovery Preparedness with AWS CloudFormation​)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "39ec974a8d3a470cb9cf6caebd8b76e4",
                    "lastUpdateTime": 1541018027236
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 353708,
            "Name": "AWS EC2 AMI and EBS Backup and Restore Methods clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClickedSticky",
                    "funcArgs": {
                        "jQuerySelector": ".walkme-custom-bbcode-link:contains(AWS EC2 AMI and EBS Backup and Restore Methods)"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "59468679774a58742b1213e220485a6d",
                    "lastUpdateTime": 1541018115215
                }
            },
            "GoalType": 14,
            "RelatedObjectId": 127309,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Title": "Welcome to Linux Academy",
        "Description": "[div style=&quot;text-align: center;&quot;][img=200x200]https://linuxacademy.com/blog/wp-content/uploads/2016/03/mrpinehead.png[/img][/div]\n\n[div style=&quot;text-align: center !important;&quot;][size=14][b]Train directly in the live environments with these hands-on Learning Activities[/b][/size][/div][div style=&quot;text-align: center !important;&quot;]\n[/div][ul][li][u]​[url=https://beta.linuxacademy.com/#/activities/details/f2a24706-8b7b-4a21-9ad6-859bd5595215 target=&quot;_blank&quot;]Building a Three Tier Network VPC From Scratch in AWS​[/url][/u][/li][li][u][url=https://beta.linuxacademy.com/#/activities/details/42b09543-d9f1-413a-9e75-8178bf93fae0 target=&quot;_blank&quot;]AWS EC2 Connectivity Troubleshooting Scenario​[/url][/u][/li][li][u][url=https://beta.linuxacademy.com/#/activities/details/aef4fdf2-d63b-45e0-a6f1-b8c087c1dddd target=&quot;_blank&quot;]Creating a DynamoDB Table inside the AWS Console​[/url][/u][/li][li][u][url=https://beta.linuxacademy.com/#/activities/details/1167a5fe-7953-4f6c-89ed-50e8b18ccac3 target=&quot;_blank&quot;]Creating and Subscribing to AWS SNS Topics​[/url][/u][/li][li][u][url=https://beta.linuxacademy.com/#/activities/details/bbee580b-c339-41b3-99b3-42a1290dd5f2 target=&quot;_blank&quot;]Disaster Recovery Preparedness with AWS CloudFormation​[/url][/u][/li][li][u][url=https://beta.linuxacademy.com/#/activities/details/bf21283c-0651-4ad6-afb1-202ccfcee973 target=&quot;_blank&quot;]AWS EC2 AMI and EBS Backup and Restore Methods[/url][/u][/li][/ul]",
        "Settings": {
            "position": "8",
            "overlay": {
                "opct": "0.7"
            },
            "marginV": "20",
            "marginH": "40",
            "variation": {
                "children": {
                    ".wm-template-main-bg": {
                        "attributes": {
                            "background-color": "#182B37"
                        }
                    },
                    ".wm-main-border-left-color": {
                        "attributes": {
                            "border-left-color": "#182B37"
                        }
                    },
                    ".wm-main-border-right-color": {
                        "attributes": {
                            "border-right-color": "#182B37"
                        }
                    },
                    ".wm-main-border-top-color": {
                        "attributes": {
                            "border-top-color": "#182B37"
                        }
                    },
                    ".wm-main-border-bottom-color": {
                        "attributes": {
                            "border-bottom-color": "#182B37"
                        }
                    },
                    ".wm-main-color": {
                        "attributes": {
                            "color": "#182B37"
                        }
                    },
                    ".wm-main-border-bottom-darker": {
                        "attributes": {
                            "border-bottom-color": "#15252f"
                        }
                    },
                    ".wm-action-text-color": {
                        "attributes": {
                            "color": "#fff"
                        }
                    },
                    ".wm-main-bg-hover:hover": {
                        "attributes": {
                            "background-color": "#1b303e"
                        }
                    },
                    ".wm-template-text, .wm-template-text *": {
                        "attributes": {
                            "color": "#182B37"
                        }
                    }
                }
            },
            "ASEnabled": "1",
            "ASRep": "once",
            "ASCTEnabled": "1",
            "ASCT": {
                "nodeType": "And",
                "nodeDepth": "0",
                "leftSon": {
                    "nodeType": "And",
                    "nodeDepth": "0",
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "/cp/dashboard"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "5dfc3eeb20a0467e9c25e4b974724d76"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "UrlNotContains",
                        "funcArgs": {
                            "UrlInput": "/cp/login"
                        },
                        "nodeDepth": "0",
                        "ConditionId": "8edb629cfa5e44cfa8204af442f9df90"
                    }
                },
                "rightSon": {
                    "nodeType": "Func",
                    "funcName": "jQueryFalse",
                    "funcArgs": {
                        "jQuerySelector": "a.dashboard-recent-course-link"
                    },
                    "nodeDepth": "0",
                    "ConditionId": "1b36e8136f924a9ab86b152eed8abbb7"
                },
                "lastUpdateTime": "1509558075376"
            },
            "stopOn": {
                "action": "True",
                "x": "True"
            },
            "v": "1"
        },
        "UiComponentId": 1,
        "UiComponentVersion": 0,
        "DisplayerId": 1,
        "UITemplateId": 8,
        "UITemplateVersion": 1,
        "UIVariationsIds": [],
        "ThemeVariation": null,
        "PositionVariation": null,
        "Actions": [{
            "ShouldDelete": false,
            "Id": 253589,
            "Text": "See Full List of Learning Activities",
            "Type": "playShuttle",
            "Args": {
                "shuttleId": "61040"
            },
            "IsActive": true,
            "RelatedObjectType": 14,
            "RelatedObjectId": 127309
        }, {
            "ShouldDelete": false,
            "Id": 253590,
            "Text": "Close",
            "Type": "destroy",
            "Args": null,
            "IsActive": false,
            "RelatedObjectType": 14,
            "RelatedObjectId": 127309
        }],
        "DesignTemplateId": null,
        "DesignTemplatePlaceholderConfigs": [],
        "Id": 127309,
        "OrderIndex": 26,
        "Name": "Mock- Welcome to Linux Academy"
    }]
      , E = [{
        "LinkedDeployables": [{
            "DeployableID": 92110,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4178757
        }, {
            "DeployableID": 90920,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176727
        }, {
            "DeployableID": 89438,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176728
        }, {
            "DeployableID": 91137,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176729
        }, {
            "DeployableID": 91145,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176730
        }, {
            "DeployableID": 91146,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176731
        }, {
            "DeployableID": 91147,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176732
        }, {
            "DeployableID": 91149,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176733
        }, {
            "DeployableID": 91150,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176734
        }, {
            "DeployableID": 91151,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176735
        }, {
            "DeployableID": 91152,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176736
        }, {
            "DeployableID": 91153,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176737
        }, {
            "DeployableID": 91154,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176738
        }, {
            "DeployableID": 91155,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176739
        }, {
            "DeployableID": 91156,
            "DeployableType": 2,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176740
        }, {
            "DeployableID": 40145,
            "DeployableType": 1,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176742
        }, {
            "DeployableID": 15032,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176743
        }, {
            "DeployableID": 15267,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176744
        }, {
            "DeployableID": 15268,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176745
        }, {
            "DeployableID": 15618,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176746
        }, {
            "DeployableID": 16571,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176747
        }, {
            "DeployableID": 16572,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176748
        }, {
            "DeployableID": 16573,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176749
        }, {
            "DeployableID": 16582,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176750
        }, {
            "DeployableID": 16574,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176751
        }, {
            "DeployableID": 16575,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176752
        }, {
            "DeployableID": 16576,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176753
        }, {
            "DeployableID": 16577,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176754
        }, {
            "DeployableID": 16578,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176755
        }, {
            "DeployableID": 16579,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176756
        }, {
            "DeployableID": 16580,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176757
        }, {
            "DeployableID": 16581,
            "DeployableType": 9,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176758
        }, {
            "DeployableID": 30360,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176760
        }, {
            "DeployableID": 30364,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176761
        }, {
            "DeployableID": 31141,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176762
        }, {
            "DeployableID": 32002,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176763
        }, {
            "DeployableID": 32003,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176764
        }, {
            "DeployableID": 32005,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176765
        }, {
            "DeployableID": 32007,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176766
        }, {
            "DeployableID": 32008,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176767
        }, {
            "DeployableID": 32009,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176768
        }, {
            "DeployableID": 32010,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176769
        }, {
            "DeployableID": 32011,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176770
        }, {
            "DeployableID": 32012,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176771
        }, {
            "DeployableID": 32013,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176772
        }, {
            "DeployableID": 32014,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176773
        }, {
            "DeployableID": 32015,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176774
        }, {
            "DeployableID": 32489,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176775
        }, {
            "DeployableID": 18949,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176776
        }, {
            "DeployableID": 14592,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176777
        }, {
            "DeployableID": 14599,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176778
        }, {
            "DeployableID": 14620,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176779
        }, {
            "DeployableID": 14626,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176780
        }, {
            "DeployableID": 15095,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176781
        }, {
            "DeployableID": 16265,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 151308,
            "groupId": 151308,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4176782
        }],
        "Settings": {
            "Color": "646786"
        },
        "GroupType": 3,
        "Name": "Conversion",
        "OrderIndex": 0.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 151308
    }, {
        "LinkedDeployables": [{
            "DeployableID": 30360,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 153329,
            "groupId": 153329,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4251968
        }],
        "Settings": {
            "Color": "59f4f2",
            "Condition": {
                "nodeType": "Func",
                "funcName": "ConditionBlockTrue",
                "funcArgs": {
                    "conditionBlockId": "14599"
                },
                "nodeDepth": "0"
            }
        },
        "GroupType": 3,
        "Name": "Test",
        "OrderIndex": 1.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 153329
    }, {
        "LinkedDeployables": [{
            "DeployableID": 33147,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 154109,
            "groupId": 154109,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4282212
        }, {
            "DeployableID": 14599,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 154109,
            "groupId": 154109,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4280506
        }, {
            "DeployableID": 14620,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 154109,
            "groupId": 154109,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4280508
        }, {
            "DeployableID": 127309,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 154109,
            "groupId": 154109,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 11330287
        }],
        "Settings": {
            "Color": "ea2533",
            "Condition": {
                "nodeType": "Func",
                "funcName": "ConditionBlockTrue",
                "funcArgs": {
                    "conditionBlockId": "14714"
                },
                "nodeDepth": "0"
            }
        },
        "GroupType": 3,
        "Name": "Do no show in Community Edition",
        "OrderIndex": 2.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 154109
    }, {
        "LinkedDeployables": [{
            "DeployableID": 33378,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 154131,
            "groupId": 154131,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 4282214
        }, {
            "DeployableID": 223404,
            "DeployableType": 19,
            "OrderIndex": 0,
            "RelatedObjectId": 154131,
            "groupId": 154131,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 9398944
        }, {
            "DeployableID": 127308,
            "DeployableType": 14,
            "OrderIndex": 0,
            "RelatedObjectId": 154131,
            "groupId": 154131,
            "Settings": null,
            "ShouldDelete": false,
            "Id": 11330286
        }],
        "Settings": {
            "Color": "08af62",
            "Condition": {
                "nodeType": "Func",
                "funcName": "ConditionBlockTrue",
                "funcArgs": {
                    "conditionBlockId": "14722"
                },
                "nodeDepth": "0"
            }
        },
        "GroupType": 3,
        "Name": "Only Show in Community Edition",
        "OrderIndex": 3.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 154131
    }, {
        "LinkedDeployables": [],
        "Settings": {
            "Color": "878686"
        },
        "GroupType": 3,
        "Name": "Pause",
        "OrderIndex": 4.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 314486
    }]
      , C = [{
        "ConditionsTree": {
            "nodeType": "Func",
            "funcName": "jQueryTextEquals",
            "funcArgs": {
                "jQuerySelector": "a[data-toggle=&quot;dropdown&quot;]:has(i.fa-user)",
                "jQueryText": "SamWalkMe+Com"
            },
            "nodeDepth": "0",
            "ConditionId": "5e254d1db4152a4ee5796f7d46acb00c",
            "lastUpdateTime": "1492465312570"
        },
        "Settings": null,
        "Name": "tagCond-153329",
        "OrderIndex": 0.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 14599
    }, {
        "ConditionsTree": {
            "nodeType": "Func",
            "funcName": "jQueryFalse",
            "funcArgs": {
                "jQuerySelector": "span.free-trial:contains(&quot;Community Edition&quot;)"
            },
            "nodeDepth": "0",
            "ConditionId": "04ec835ab9b0416d7fcc62b30da7342c",
            "lastUpdateTime": "1492709906974"
        },
        "Settings": null,
        "Name": "tagCond-154109",
        "OrderIndex": 0.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 14714
    }, {
        "ConditionsTree": {
            "nodeType": "Func",
            "funcName": "jQueryTrue",
            "funcArgs": {
                "jQuerySelector": "span.free-trial:contains(&quot;Community Edition&quot;)"
            },
            "nodeDepth": "0",
            "ConditionId": "b99293b381031524dd9f8c880b4be261",
            "lastUpdateTime": "1492717737985"
        },
        "Settings": null,
        "Name": "tagCond-154131",
        "OrderIndex": 1.00000,
        "PublishStatus": 2,
        "IsModified": false,
        "ShouldDelete": false,
        "Id": 14722
    }]
      , I = [{
        "Flow": {
            "Id": 1287,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1716992,
            "Nodes": {
                "7508": {
                    "UIElements": [{
                        "Id": 6080,
                        "Type": "Element",
                        "Title": "Click on a category to get started",
                        "Text": null,
                        "PointIndex": 2,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 3,
                            "lv": 1,
                            "index": 2,
                            "v": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "autoQuery": "UL[id=\"course-categories\"] LI A",
                                "bodyHeight": 969,
                                "bodyWidth": 1903,
                                "centeredElementWidth": 1903,
                                "class": "hex-topic-link",
                                "elementAbsX": 580.984375,
                                "elementAbsY": 170.671875,
                                "elementClass": "hex-topic-link",
                                "elementHeight": 92,
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/dashboard"
                                },
                                "elementText": "",
                                "elementWidth": 68,
                                "elementXpath": "/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]",
                                "href": "https://linuxacademy.com/cp/library/catalog/view/CloudCourses",
                                "p": true,
                                "relativeLeft": 580.984375,
                                "textArray": ["cloud"]
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 1462820,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7508,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "1716992": {
                    "UIElements": [{
                        "Id": 1250437,
                        "Type": "Element",
                        "Title": "Hover Over Training",
                        "Text": "",
                        "PointIndex": 1,
                        "ConditionTrees": {},
                        "Settings": {
                            "v": 1,
                            "Position": 2,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "aria-controls": "library_overlay",
                                "aria-expanded": "false",
                                "aria-haspopup": "true",
                                "autoQuery": "A[id=\"course-menu\"]",
                                "bodyHeight": 969,
                                "bodyWidth": 1903,
                                "centeredElementWidth": 1903,
                                "data-toggle": "dropdown",
                                "elementAbsX": 490.546875,
                                "elementAbsY": 76.671875,
                                "elementHeight": 51,
                                "elementId": "course-menu",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/dashboard"
                                },
                                "elementText": "",
                                "elementWidth": 53,
                                "elementXpath": "/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]",
                                "href": "",
                                "id": "course-menu",
                                "p": true,
                                "relativeLeft": 490.546875,
                                "textArray": ["training"]
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 1462819,
                            "Type": "Hover",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Hover",
                            "TargetFlowNodeId": 7508,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 1716992,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                }
            }
        },
        "FlowId": 1287,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 147388,
            "Name": "Play a Course",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "/library/catalog/"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "334eee0a8fce9465f834c4e617e25c13"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "span.library-content-title"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "5a1513d8acde1bd13bb56f73a8173d7e"
                    },
                    "lastUpdateTime": 1489767579630
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14592,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 150576,
            "Name": "On course page",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "library/catalog"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "80556973eed7c91b350566d5db47efbf",
                    "lastUpdateTime": 1489767598249
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14592,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 14592,
        "OrderIndex": 0,
        "Name": "Enroll in a Course and start learning"
    }, {
        "Flow": {
            "Id": 1292,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 11350,
            "Nodes": {
                "11350": {
                    "ActionType": "Redirect",
                    "Links": [{
                        "Id": 3524,
                        "Name": null,
                        "TargetFlowNodeId": 11351,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 11350,
                    "Type": "Action",
                    "Name": "Redirect",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dontRedirectIfIdentical": true,
                            "url": "https://linuxacademy.com/cp/coursescheduler/create"
                        }
                    }
                },
                "11351": {
                    "UIElements": [{
                        "Id": 9217,
                        "Type": "Element",
                        "Title": "Select your course and enter details, then click Next.",
                        "Text": null,
                        "PointIndex": 2,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [],
                                    "Id": 66740,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "UrlContains",
                                        "funcArgs": {
                                            "UrlInput": "coursescheduler/create"
                                        }
                                    }
                                },
                                "Id": 34341,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]",
                                "elementAbsX": 1658.9166259765625,
                                "elementAbsY": 477.33331298828125,
                                "bodyWidth": 2333,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 52.5,
                                "elementClass": "btn btn-la btn-sm btn-next",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/coursescheduler/create"
                                },
                                "relativeLeft": 1658.9166259765625,
                                "centeredElementWidth": 2333,
                                "textArray": ["next"],
                                "autoQuery": "DIV[id=\"myWizard\"] BUTTON",
                                "class": "btn btn-la btn-sm btn-next",
                                "data-last": "Complete",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div#myWizard:has(li.active[data-step=\"1\"]) button.btn-next"
                        },
                        "Triggers": [{
                            "Id": 10503,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 11352,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 11351,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "11352": {
                    "UIElements": [{
                        "Id": 9218,
                        "Type": "Element",
                        "Title": "Enter available time.",
                        "Text": null,
                        "PointIndex": 3,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [{
                                        "Nodes": [],
                                        "Id": 66742,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "UrlContains",
                                            "funcArgs": {
                                                "UrlInput": "coursescheduler/create"
                                            }
                                        }
                                    }, {
                                        "Nodes": [],
                                        "Id": 66743,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryTrue",
                                            "funcArgs": {
                                                "jQuerySelector": "li[data-step='2'].active"
                                            }
                                        }
                                    }],
                                    "Id": 66741,
                                    "Type": 1,
                                    "Settings": {}
                                },
                                "Id": 34342,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]",
                                "elementAbsX": 1658.9166259765625,
                                "elementAbsY": 477.33331298828125,
                                "bodyWidth": 2333,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 52.5,
                                "elementClass": "btn btn-la btn-sm btn-next",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/coursescheduler/create"
                                },
                                "relativeLeft": 1658.9166259765625,
                                "centeredElementWidth": 2333,
                                "textArray": ["next"],
                                "autoQuery": "DIV[id=\"myWizard\"] BUTTON",
                                "class": "btn btn-la btn-sm btn-next",
                                "data-last": "Complete",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div#myWizard:has(li.active[data-step=\"2\"]) button.btn-next"
                        },
                        "Triggers": [{
                            "Id": 10502,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 11353,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 11352,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "11353": {
                    "UIElements": [{
                        "Id": 9219,
                        "Type": "Element",
                        "Title": "Review the schedule you&#39;ve created.",
                        "Text": "This tells you when you should be competing each lesson in order to reach your goal.",
                        "PointIndex": 4,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [{
                                        "Nodes": [],
                                        "Id": 66745,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "UrlContains",
                                            "funcArgs": {
                                                "UrlInput": "coursescheduler/create"
                                            }
                                        }
                                    }, {
                                        "Nodes": [],
                                        "Id": 66746,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryTrue",
                                            "funcArgs": {
                                                "jQuerySelector": "li[data-step='3'].active"
                                            }
                                        }
                                    }],
                                    "Id": 66744,
                                    "Type": 1,
                                    "Settings": {}
                                },
                                "Id": 34343,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]",
                                "elementAbsX": 1658.9166259765625,
                                "elementAbsY": 477.33331298828125,
                                "bodyWidth": 2333,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 52.5,
                                "elementClass": "btn btn-la btn-sm btn-next",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/coursescheduler/create"
                                },
                                "relativeLeft": 1658.9166259765625,
                                "centeredElementWidth": 2333,
                                "textArray": ["next"],
                                "autoQuery": "DIV[id=\"myWizard\"] BUTTON",
                                "class": "btn btn-la btn-sm btn-next",
                                "data-last": "Complete",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div#myWizard:has(li.active[data-step=\"3\"]) button.btn-next"
                        },
                        "Triggers": [{
                            "Id": 10501,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 11354,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 11353,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "11354": {
                    "UIElements": [{
                        "Id": 9220,
                        "Type": "Element",
                        "Title": "Select which days you would like Email Reminders",
                        "Text": null,
                        "PointIndex": 5,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [{
                                        "Nodes": [],
                                        "Id": 66748,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "UrlContains",
                                            "funcArgs": {
                                                "UrlInput": "coursescheduler/create"
                                            }
                                        }
                                    }, {
                                        "Nodes": [],
                                        "Id": 66749,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryTrue",
                                            "funcArgs": {
                                                "jQuerySelector": "li[data-step='4'].active"
                                            }
                                        }
                                    }],
                                    "Id": 66747,
                                    "Type": 1,
                                    "Settings": {}
                                },
                                "Id": 34344,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]",
                                "elementAbsX": 1658.9166259765625,
                                "elementAbsY": 477.33331298828125,
                                "bodyWidth": 2333,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 52.5,
                                "elementClass": "btn btn-la btn-sm btn-next",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/coursescheduler/create"
                                },
                                "relativeLeft": 1658.9166259765625,
                                "centeredElementWidth": 2333,
                                "textArray": ["next"],
                                "autoQuery": "DIV[id=\"myWizard\"] BUTTON",
                                "class": "btn btn-la btn-sm btn-next",
                                "data-last": "Complete",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div#myWizard:has(li.active[data-step=\"4\"]) button.btn-next"
                        },
                        "Triggers": [{
                            "Id": 10500,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 11355,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 11354,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "11355": {
                    "UIElements": [{
                        "Id": 9221,
                        "Type": "Element",
                        "Title": "Give your schedule a name and click Complete",
                        "Text": null,
                        "PointIndex": 6,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [{
                                        "Nodes": [],
                                        "Id": 66751,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "UrlContains",
                                            "funcArgs": {
                                                "UrlInput": "coursescheduler/create"
                                            }
                                        }
                                    }, {
                                        "Nodes": [],
                                        "Id": 66752,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryTrue",
                                            "funcArgs": {
                                                "jQuerySelector": "li[data-step='5'].active"
                                            }
                                        }
                                    }],
                                    "Id": 66750,
                                    "Type": 1,
                                    "Settings": {}
                                },
                                "Id": 34345,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[2]",
                                "elementAbsX": 1622.7166748046875,
                                "elementAbsY": 477.33331298828125,
                                "bodyWidth": 2333,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 88.5,
                                "elementClass": "btn btn-la btn-sm btn-next",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/coursescheduler/create"
                                },
                                "relativeLeft": 1622.7166748046875,
                                "centeredElementWidth": 2333,
                                "textArray": ["complete"],
                                "autoQuery": "DIV[id=\"myWizard\"] BUTTON",
                                "class": "btn btn-la btn-sm btn-next",
                                "data-last": "Complete",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div#myWizard:has(li.active[data-step=\"5\"]) button.btn-next"
                        },
                        "Triggers": [{
                            "Id": 10499,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 11355,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                }
            }
        },
        "FlowId": 1292,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 149362,
            "Name": "Course Schedule Created",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "And",
                        "nodeDepth": 0,
                        "leftSon": {
                            "nodeType": "Func",
                            "funcName": "UrlContains",
                            "funcArgs": {
                                "UrlInput": "/coursescheduler/create"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "aab0bbdb00af202e6a76a7dc86f7c5f6"
                        },
                        "rightSon": {
                            "nodeType": "Func",
                            "funcName": "jQueryTrue",
                            "funcArgs": {
                                "jQuerySelector": "li[data-step='5'].active"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "276fbafe71e59384cc102ffb1992a175"
                        }
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "button[data-last=\"Complete\"]"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "29d323bea7d29d375ea64ce3d9a9143c"
                    },
                    "lastUpdateTime": 1489625182934
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14599,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 149363,
            "Name": "Course Schedule Creation Started",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "And",
                        "nodeDepth": 0,
                        "leftSon": {
                            "nodeType": "Func",
                            "funcName": "UrlContains",
                            "funcArgs": {
                                "UrlInput": "/cp/coursescheduler/create"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "b42f114d87b818e9f8b80030e517d9e9"
                        },
                        "rightSon": {
                            "nodeType": "Func",
                            "funcName": "jQueryTrue",
                            "funcArgs": {
                                "jQuerySelector": "li[data-step='1'].active"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "016ff4864fca2a558b30e4eeffbecda4"
                        }
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "button[data-last=\"Complete\"]"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "5043edf5faece6bea674a94d0c85bbdf"
                    },
                    "lastUpdateTime": 1489625217327
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14599,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 14599,
        "OrderIndex": 1,
        "Name": "Create a  Course Schedule to stay on track"
    }, {
        "Flow": {
            "Id": 1306,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 7712,
            "Nodes": {
                "7712": {
                    "UIElements": [{
                        "Id": 6241,
                        "Type": "Element",
                        "Title": "Click Learning Paths",
                        "Text": null,
                        "PointIndex": 1,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "index": 1,
                            "z-index": 0
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]",
                                "elementAbsX": 875.2000122070312,
                                "elementAbsY": 70.33332824707031,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 45,
                                "elementWidth": 99,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/dashboard"
                                },
                                "relativeLeft": 875.2000122070312,
                                "centeredElementWidth": 1849,
                                "textArray": ["learningpaths"],
                                "autoQuery": "DIV[id=\"main-nav\"] UL LI A",
                                "href": "/cp/learningpaths",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7058,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 7713,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7712,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7713": {
                    "UIElements": [{
                        "Id": 6242,
                        "Type": "Element",
                        "Title": "Find the Learning Path you wish to start and click &quot;view path&quot;",
                        "Text": null,
                        "PointIndex": 2,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [],
                                    "Id": 66761,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "UrlContains",
                                        "funcArgs": {
                                            "UrlInput": "learningpaths"
                                        }
                                    }
                                },
                                "Id": 34348,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 0,
                            "lv": 1,
                            "index": 2
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[5]/div[1]",
                                "elementAbsX": 339.5,
                                "elementAbsY": 718.6166687011719,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 13608,
                                "elementWidth": 1140,
                                "elementClass": "container",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/learningpaths"
                                },
                                "relativeLeft": 339.5,
                                "centeredElementWidth": 1849,
                                "textArray": ["availablelearningpaths", "author:", "all"],
                                "autoQuery": "DIV",
                                "class": "container",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7057,
                            "Type": "Custom",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Custom",
                            "TargetFlowNodeId": 7714,
                            "ConditionTrees": {
                                "CustomTrigger": {
                                    "Root": {
                                        "Nodes": [],
                                        "Id": 60805,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryClickedSticky",
                                            "funcArgs": {
                                                "jQuerySelector": "a.pull-right"
                                            }
                                        }
                                    },
                                    "Id": 31000,
                                    "ConditionType": "CustomTrigger"
                                }
                            }
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7713,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7714": {
                    "UIElements": [{
                        "Id": 6243,
                        "Type": "Element",
                        "Title": "Click Enroll",
                        "Text": null,
                        "PointIndex": 3,
                        "ConditionTrees": {
                            "StartPoint": {
                                "Root": {
                                    "Nodes": [{
                                        "Nodes": [],
                                        "Id": 66763,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "UrlContains",
                                            "funcArgs": {
                                                "UrlInput": "learningpaths/preview"
                                            }
                                        }
                                    }, {
                                        "Nodes": [],
                                        "Id": 66764,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryTrue",
                                            "funcArgs": {
                                                "jQuerySelector": "a.btn.btn-la:visible"
                                            }
                                        }
                                    }],
                                    "Id": 66762,
                                    "Type": 1,
                                    "Settings": {}
                                },
                                "Id": 34349,
                                "ConditionType": "StartPoint"
                            }
                        },
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "index": 3
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[2]/div[2]/div[2]/a[1]",
                                "elementAbsX": 370.5,
                                "elementAbsY": 409.6333312988281,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 22,
                                "elementWidth": 54,
                                "elementClass": "btn btn-la",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/learningpaths/preview/id/127"
                                },
                                "relativeLeft": 370.5,
                                "centeredElementWidth": 1849,
                                "textArray": ["enroll"],
                                "autoQuery": "A",
                                "class": "btn btn-la",
                                "href": "/cp/learningpaths/index/action/enroll/id/127",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7056,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 7715,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7714,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7715": {
                    "ActionType": "Split",
                    "Links": [{
                        "Id": 2473,
                        "Name": "NO",
                        "TargetFlowNodeId": 7716,
                        "ConditionTrees": {}
                    }, {
                        "Id": 2474,
                        "Name": "YES",
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {
                            "Branch": {
                                "Root": {
                                    "Nodes": [],
                                    "Id": 60804,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "jQueryTrue",
                                        "funcArgs": {
                                            "jQuerySelector": "a.btn.btn-la.btn-la-lg:eq(1)"
                                        }
                                    }
                                },
                                "Id": 30999,
                                "ConditionType": "Branch"
                            }
                        }
                    }],
                    "ConditionTrees": {},
                    "Id": 7715,
                    "Type": "Action",
                    "Name": "Is the user enrolled in two or more courses",
                    "PointIndex": 4,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {},
                        "index": 4
                    }
                },
                "7716": {
                    "UIElements": [{
                        "Id": 6244,
                        "Type": "Popup",
                        "Title": "Way to go!",
                        "Text": "By enrolling in a learning path you&#39;ve made it easy to keep track of your progress from one course to the next as you continue improving. ",
                        "PointIndex": 5,
                        "ConditionTrees": {},
                        "Settings": {
                            "popupStepButtons": [{
                                "id": 0,
                                "name": "Next/Done",
                                "action": 0
                            }],
                            "displayX": 1,
                            "fadeBackground": 1,
                            "index": 5
                        },
                        "IdentifySettings": null,
                        "Triggers": [{
                            "Id": 7059,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7716,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                }
            }
        },
        "FlowId": 1306,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 150415,
            "Name": "Clicked Enroll",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "jQueryClicked",
                    "funcArgs": {
                        "jQuerySelector": "div.learning-paths-enroll-btn a"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "c3c1f5d68fd3ceebc33bdff0b8996ae9",
                    "lastUpdateTime": 1489679846364
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14620,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 14620,
        "OrderIndex": 2,
        "Name": "Find a Learning Path to a specific career track"
    }, {
        "Flow": {
            "Id": 1312,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 7739,
            "Nodes": {
                "7739": {
                    "UIElements": [{
                        "Id": 6266,
                        "Type": "Element",
                        "Title": "Hover Over Community",
                        "Text": null,
                        "PointIndex": 1,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "index": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[6]/a[1]",
                                "elementAbsX": 1040.3333740234375,
                                "elementAbsY": 70.33332824707031,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 45,
                                "elementWidth": 81,
                                "elementClass": "drop-toggle community-dd collapsed",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/learningpaths/index/action/enroll/id/127"
                                },
                                "relativeLeft": 1040.3333740234375,
                                "centeredElementWidth": 1849,
                                "textArray": ["community"],
                                "autoQuery": "DIV[id=\"main-nav\"] UL LI A",
                                "href": "#",
                                "onclick": "return false;",
                                "class": "drop-toggle community-dd collapsed",
                                "data-toggle": "collapse",
                                "data-target": "#community_overlay",
                                "aria-expanded": "false",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7086,
                            "Type": "Hover",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Hover",
                            "TargetFlowNodeId": 7740,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7739,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7740": {
                    "UIElements": [{
                        "Id": 6267,
                        "Type": "Element",
                        "Title": "Click Interact with Students",
                        "Text": null,
                        "PointIndex": 2,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "index": 2
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[6]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]",
                                "elementAbsX": 882.0333251953125,
                                "elementAbsY": 157.3333282470703,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 54,
                                "elementWidth": 168,
                                "elementClass": "hex-topic-link",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/learningpaths/index/action/enroll/id/127"
                                },
                                "relativeLeft": 882.0333251953125,
                                "centeredElementWidth": 1849,
                                "textArray": ["interactwithstudents"],
                                "autoQuery": "DIV[id=\"community_overlay\"] UL LI A",
                                "class": "hex-topic-link",
                                "href": "/cp/socialize",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsIdentifyByText": true
                        },
                        "Triggers": [{
                            "Id": 7085,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 12538,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7740,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7741": {
                    "UIElements": [{
                        "Id": 6268,
                        "Type": "Element",
                        "Title": "Check out how to get started:",
                        "Text": null,
                        "PointIndex": 5,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 0,
                            "lv": 1,
                            "index": 3
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[3]/ul[1]/li[1]/div[1]/div[1]",
                                "elementAbsX": 354.5,
                                "elementAbsY": 785.1500244140625,
                                "bodyWidth": 1849,
                                "bodyHeight": 941,
                                "elementHeight": 183,
                                "elementWidth": 246,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/socialize"
                                },
                                "relativeLeft": 354.5,
                                "centeredElementWidth": 1849,
                                "textArray": ["here'showtogetstarted:", "congratulatesomeoneontheirachievement", "commentonsomeonespost"],
                                "autoQuery": "UL LI DIV",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7084,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": 7742,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7741,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "7742": {
                    "UIElements": [{
                        "Id": 6269,
                        "Type": "Element",
                        "Title": "Try introducing yourself!",
                        "Text": "The Linux Academy Community is always happy to welcome new learners.",
                        "PointIndex": 6,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "index": 4
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[2]/div[2]/div[1]/div[2]",
                                "elementAbsX": 655.5,
                                "elementAbsY": 322.83331298828125,
                                "bodyWidth": 1849,
                                "bodyHeight": 971,
                                "elementHeight": 34,
                                "elementWidth": 530,
                                "elementClass": "feed-post-prompt-controls",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/socialize"
                                },
                                "relativeLeft": 655.5,
                                "centeredElementWidth": 1849,
                                "textArray": ["general", "options", "general"],
                                "autoQuery": "DIV",
                                "class": "feed-post-prompt-controls",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 7083,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 7742,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "12538": {
                    "ActionType": "Split",
                    "Links": [{
                        "Id": 3698,
                        "Name": "NO",
                        "TargetFlowNodeId": 12539,
                        "ConditionTrees": {}
                    }, {
                        "Id": 3699,
                        "Name": "YES",
                        "TargetFlowNodeId": 7741,
                        "ConditionTrees": {
                            "Branch": {
                                "Root": {
                                    "Nodes": [],
                                    "Id": 65411,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "jQueryTrue",
                                        "funcArgs": {
                                            "jQuerySelector": "div.user-posts span.user-stats-number-large:contains(\"0\")"
                                        }
                                    }
                                },
                                "Id": 33591,
                                "ConditionType": "Branch"
                            }
                        }
                    }],
                    "ConditionTrees": {
                        "StartPoint": {
                            "Root": {
                                "Nodes": [],
                                "Id": 81013,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "UrlContains",
                                    "funcArgs": {
                                        "UrlInput": "socialize"
                                    }
                                }
                            },
                            "Id": 41809,
                            "ConditionType": "StartPoint"
                        }
                    },
                    "Id": 12538,
                    "Type": "Action",
                    "Name": "Does the user have 0 posts?",
                    "PointIndex": 3,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {}
                    }
                },
                "12539": {
                    "UIElements": [{
                        "Id": 10288,
                        "Type": "Element",
                        "Title": "Type your questions and click share.",
                        "Text": null,
                        "PointIndex": 4,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "topOffset": 0,
                            "z-index": 0
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[2]/div[2]/div[1]/div[2]",
                                "elementAbsX": 655.5,
                                "elementAbsY": 290.33331298828125,
                                "bodyWidth": 1849,
                                "bodyHeight": 922,
                                "elementHeight": 34,
                                "elementWidth": 530,
                                "elementClass": "feed-post-prompt-controls",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/socialize"
                                },
                                "relativeLeft": 655.5,
                                "centeredElementWidth": 1849,
                                "textArray": ["general", "options", "general"],
                                "autoQuery": "DIV",
                                "class": "feed-post-prompt-controls",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1,
                            "IsJquerySelector": true,
                            "JquerySelector": "div.feed-post-prompt-controls"
                        },
                        "Triggers": [{
                            "Id": 11684,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 12539,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                }
            }
        },
        "FlowId": 1312,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 150418,
            "Name": "Clicked Share",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "socialize"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "c035dd1f6cd089e53d085080dbb6ec0e"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClicked",
                        "funcArgs": {
                            "jQuerySelector": "button.feed-post-btn:eq(0)"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "dbd0d6e9f36c50b08b0b31c4fed2c5db"
                    },
                    "lastUpdateTime": 1489681105261
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14626,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 150419,
            "Name": "On Feed Page",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "socialize"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "93a6e8697d73c1c8b516b4c1e4687210",
                    "lastUpdateTime": 1489681122124
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 14626,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 14626,
        "OrderIndex": 3,
        "Name": "Get involved in our Community forum"
    }, {
        "Flow": {
            "Id": 1513,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 10698,
            "Nodes": {
                "10698": {
                    "UIElements": [{
                        "Id": 8639,
                        "Type": "Element",
                        "Title": "Click Hands-on Labs",
                        "Text": null,
                        "PointIndex": 1,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1,
                            "z-index": 0
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "autoQuery": "LI[id=\"hands-on-labs-link\"] A",
                                "bodyHeight": 969,
                                "bodyWidth": 1903,
                                "centeredElementWidth": 1903,
                                "class": "labs-nav-extra-padding nav-simple-link la-link",
                                "elementAbsX": 927.359375,
                                "elementAbsY": 76.671875,
                                "elementClass": "labs-nav-extra-padding nav-simple-link la-link",
                                "elementHeight": 51,
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/dashboard"
                                },
                                "elementText": "",
                                "elementWidth": 103,
                                "elementXpath": "/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]",
                                "href": "https://linuxacademy.com/cp/library/catalog/view/LiveLabs",
                                "p": true,
                                "relativeLeft": 927.359375,
                                "textArray": ["hands-onlabs"]
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 9845,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": 1101289,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 10698,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "10699": {
                    "UIElements": [{
                        "Id": 8640,
                        "Type": "Element",
                        "Title": "Select Topics",
                        "Text": "You can select more than one topic. Close the dropdown menu when finished.",
                        "PointIndex": 3,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 0,
                            "lv": 1,
                            "z-index": 0
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/span[1]/div[1]/button[1]",
                                "elementAbsX": 601.86669921875,
                                "elementAbsY": 306.33331298828125,
                                "bodyWidth": 2311,
                                "bodyHeight": 1176,
                                "elementHeight": 16.5,
                                "elementWidth": 47.5,
                                "elementClass": "multiselect dropdown-toggle btn btn-la-filter-library",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/library/catalog/view/LiveLabs"
                                },
                                "relativeLeft": 601.86669921875,
                                "centeredElementWidth": 2311,
                                "textArray": ["topic"],
                                "autoQuery": "DIV[id=\"top\"] BUTTON",
                                "type": "button",
                                "class": "multiselect dropdown-toggle btn btn-la-filter-library",
                                "data-toggle": "dropdown",
                                "title": "None selected",
                                "aria-expanded": "false",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 33719,
                            "Type": "Custom",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Custom",
                            "TargetFlowNodeId": 14371,
                            "ConditionTrees": {
                                "CustomTrigger": {
                                    "Root": {
                                        "Nodes": [],
                                        "Id": 81948,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "jQueryClickedSticky",
                                            "funcArgs": {
                                                "jQuerySelector": "ul.multiselect-container.dropdown-menu a"
                                            }
                                        }
                                    },
                                    "Id": 42307,
                                    "ConditionType": "CustomTrigger"
                                }
                            }
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 10699,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "10700": {
                    "UIElements": [{
                        "Id": 8641,
                        "Type": "Element",
                        "Title": "Find your lab and get started.",
                        "Text": null,
                        "PointIndex": 7,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[2]/div[1]",
                                "elementAbsX": 570.61669921875,
                                "elementAbsY": 409.08331298828125,
                                "bodyWidth": 2311,
                                "bodyHeight": 1176,
                                "elementHeight": 2423,
                                "elementWidth": 750,
                                "elementClass": "col-sm-8 col-xs-12 library-container-row",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/library/catalog/view/LiveLabs"
                                },
                                "relativeLeft": 570.61669921875,
                                "centeredElementWidth": 2311,
                                "textArray": ["lab", "configuringbind9dns", "length:03:00:00"],
                                "autoQuery": "DIV[id=\"top\"] DIV",
                                "class": "col-sm-8 col-xs-12 library-container-row",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 9843,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 10700,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "14371": {
                    "ActionType": "WaitForCondition",
                    "Links": [{
                        "Id": 4358,
                        "Name": null,
                        "TargetFlowNodeId": 10700,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {
                        "WaitFor": {
                            "Root": {
                                "Nodes": [],
                                "Id": 67722,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "jQueryFalse",
                                    "funcArgs": {
                                        "jQuerySelector": "label.checkbox:visible"
                                    }
                                }
                            },
                            "Id": 34959,
                            "ConditionType": "WaitFor"
                        }
                    },
                    "Id": 14371,
                    "Type": "Action",
                    "Name": "Wait For Rules",
                    "PointIndex": 5,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {}
                    }
                },
                "1101289": {
                    "ActionType": "Split",
                    "Links": [{
                        "Id": 434982,
                        "Name": "NO",
                        "TargetFlowNodeId": 10699,
                        "ConditionTrees": {}
                    }, {
                        "Id": 434983,
                        "Name": "YES",
                        "TargetFlowNodeId": 1739882,
                        "ConditionTrees": {
                            "Branch": {
                                "Root": {
                                    "Nodes": [],
                                    "Id": 916588,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "jQueryTrue",
                                        "funcArgs": {
                                            "jQuerySelector": ".free-trial"
                                        }
                                    }
                                },
                                "Id": 484310,
                                "ConditionType": "Branch"
                            }
                        }
                    }],
                    "ConditionTrees": {
                        "StartPoint": {
                            "Root": {
                                "Nodes": [],
                                "Id": 916610,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "UrlContains",
                                    "funcArgs": {
                                        "UrlInput": "LiveLabs"
                                    }
                                }
                            },
                            "Id": 484319,
                            "ConditionType": "StartPoint"
                        }
                    },
                    "Id": 1101289,
                    "Type": "Action",
                    "Name": "Community User?",
                    "PointIndex": 2,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {}
                    }
                },
                "1101292": {
                    "UIElements": [{
                        "Id": 811266,
                        "Type": "Element",
                        "Title": "Click to begin your free AWS lab",
                        "Text": "(Upgrade for more)",
                        "PointIndex": 8,
                        "ConditionTrees": {},
                        "Settings": {
                            "v": 1,
                            "Position": 0,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "autoQuery": "DIV[id=\"start_lab\"] A",
                                "bodyHeight": 969,
                                "bodyWidth": 1903,
                                "centeredElementWidth": 1903,
                                "class": "lab-page-nav-button",
                                "elementAbsX": 614.796875,
                                "elementAbsY": 516.671875,
                                "elementClass": "lab-page-nav-button",
                                "elementHeight": 27,
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/livelabs/view/id/12"
                                },
                                "elementText": "",
                                "elementWidth": 92,
                                "elementXpath": "/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/a[1]",
                                "href": "#/",
                                "onclick": "return false;",
                                "p": true,
                                "relativeLeft": 614.796875,
                                "textArray": ["startlab"]
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 950891,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 1101292,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "1739882": {
                    "UIElements": [{
                        "Id": 1267328,
                        "Type": "Popup",
                        "Title": "To begin with a Free AWS Hands-On Lab click Next",
                        "Text": "",
                        "PointIndex": 4,
                        "ConditionTrees": {},
                        "Settings": {
                            "popupStepButtons": [{
                                "id": 0,
                                "name": "Next/Done",
                                "action": 0
                            }],
                            "displayX": 1,
                            "fadeBackground": true,
                            "overlay": {
                                "opct": 0.7,
                                "enabled": true,
                                "color": "#000000"
                            },
                            "pagePosition": 8,
                            "v": 1
                        },
                        "IdentifySettings": null,
                        "Triggers": [{
                            "Id": 1482963,
                            "Type": "Button",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Next",
                            "TargetFlowNodeId": 1739883,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": false
                    }],
                    "Id": 1739882,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "1739883": {
                    "ActionType": "Redirect",
                    "Links": [{
                        "Id": 691896,
                        "Name": null,
                        "TargetFlowNodeId": 1101292,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1739883,
                    "Type": "Action",
                    "Name": "Redirect",
                    "PointIndex": 6,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dontRedirectIfIdentical": true,
                            "url": "https://linuxacademy.com/cp/livelabs/view/id/12"
                        }
                    }
                }
            }
        },
        "FlowId": 1513,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 150420,
            "Name": "Clicked on a hands-on lab",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "Func",
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "library/catalog/view/LiveLabs"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "bf8364cada8ee9777f02dcc1e9d10e6f"
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryTrue",
                        "funcArgs": {
                            "jQuerySelector": "span.library-content-title"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "0886edf35740c1ec537ee247e42c3d5c"
                    },
                    "lastUpdateTime": 1491842976378
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 15095,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 150421,
            "Name": "On Hands-on Labs Page",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "UrlContains",
                    "funcArgs": {
                        "UrlInput": "library/catalog/view/LiveLabs"
                    },
                    "nodeDepth": 0,
                    "ConditionId": "b443516fcc42cf66cff53111cd903e19",
                    "lastUpdateTime": 1491842995746
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 15095,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }, {
            "Id": 259166,
            "Name": "Community user clicked to start free lab",
            "Settings": {
                "Conditions": {
                    "nodeType": "And",
                    "nodeDepth": 0,
                    "leftSon": {
                        "nodeType": "And",
                        "nodeDepth": 0,
                        "leftSon": {
                            "nodeType": "Func",
                            "funcName": "UrlContains",
                            "funcArgs": {
                                "UrlInput": "LiveLabs"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "efd5b8f463375b9096aadc31ed39ca6d"
                        },
                        "rightSon": {
                            "nodeType": "Func",
                            "funcName": "jQueryTrue",
                            "funcArgs": {
                                "jQuerySelector": ".free-trial"
                            },
                            "nodeDepth": 0,
                            "ConditionId": "0de03053997c98fca6a0c23579ce19d2"
                        }
                    },
                    "rightSon": {
                        "nodeType": "Func",
                        "funcName": "jQueryClickedSticky",
                        "funcArgs": {
                            "jQuerySelector": ".free-tag"
                        },
                        "nodeDepth": 0,
                        "ConditionId": "b79637cc20152d52528f6617b5eb16fb"
                    },
                    "lastUpdateTime": 1521667681250
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 15095,
            "IsDeleted": false,
            "IsMainGoal": false,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 15095,
        "OrderIndex": 4,
        "Name": "Put your skills to the test with Hands-on Labs"
    }, {
        "Flow": {
            "Id": 2125,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 16169,
            "Nodes": {
                "16169": {
                    "UIElements": [{
                        "Id": 13219,
                        "Type": "Element",
                        "Title": "Check Out the Labs in this Course!",
                        "Text": null,
                        "PointIndex": 1,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 0,
                            "lv": 1,
                            "leftOffset": 0
                        },
                        "IdentifySettings": {
                            "IsJquerySelector": true,
                            "JquerySelector": "a.syllabus-item i.fa.fa-flask",
                            "IgnorePosition": 0,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[4]/div[2]/div[1]/div[23]/div[1]/a[1]",
                                "elementAbsX": 194.5,
                                "elementAbsY": 2106.9833374023438,
                                "bodyWidth": 1529,
                                "bodyHeight": 791,
                                "elementHeight": 27,
                                "elementWidth": 620,
                                "elementClass": "syllabus-item",
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/modules/view/id/44"
                                },
                                "relativeLeft": 194.5,
                                "centeredElementWidth": 1529,
                                "textArray": ["live!lab:s3essentialsandversioning"],
                                "autoQuery": "DIV[id=\"syllabus\"] A",
                                "class": "syllabus-item",
                                "href": "/cp/livelabs/view/id/2/module/44",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 15200,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 16169,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                }
            }
        },
        "FlowId": 2125,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 16265,
        "OrderIndex": 6,
        "Name": "Hand-on Lab Pointer"
    }, {
        "Flow": null,
        "FlowId": null,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "segmentationEnabled": "true"
        },
        "SmartTips": [{
            "ForceNew": false,
            "PageId": null,
            "Info": {
                "ConditionTrees": {},
                "Id": 60153,
                "TooltipText": "Deploy live hands-on environments to gain real-world skills",
                "TemplateId": 78772,
                "OrderIndex": 0,
                "GlobalStyleId": "Info",
                "IsWithIcon": true,
                "Type": 0,
                "Settings": {},
                "TooltipStyle": {
                    "backColor": "#FFFFFF",
                    "borderColor": "#1A83C8",
                    "textColor": "#000000"
                },
                "IsWithHighlighter": false
            },
            "PositiveFeedback": null,
            "Validations": [],
            "ConditionTrees": {},
            "Id": 53536,
            "OrderIndex": 0,
            "Name": "Live Labs Explaination",
            "IsEnabled": true,
            "IdentifySettings": {
                "IgnorePosition": 0,
                "ElementDescription": {
                    "autoQuery": "DIV[id=\"syllabus\"] A",
                    "bodyHeight": 978,
                    "bodyWidth": 1905,
                    "centeredElementWidth": 1905,
                    "class": "syllabus-item learning-activity",
                    "elementAbsX": 382.5,
                    "elementAbsY": 1464.03125,
                    "elementClass": "syllabus-item learning-activity",
                    "elementHeight": 27,
                    "elementLocation": {
                        "hostname": "linuxacademy.com",
                        "pathname": "/cp/modules/view/id/192"
                    },
                    "elementText": "",
                    "elementWidth": 724,
                    "elementXpath": "/html[1]/body[1]/div[4]/div[1]/div[3]/div[2]/div[1]/a[18]",
                    "href": "https://beta.linuxacademy.com/#/activities/details/445edae0-868a-4dcf-a785-b798e76cb3c8?redirect_uri=https://linuxacademy.com/cp/modules/view/id/192",
                    "p": true,
                    "relativeLeft": 382.5,
                    "textArray": ["navigation", "learningactivity:", "thedevopspipeline"]
                },
                "StepSensitivity": 1,
                "IsJquerySelector": true,
                "JquerySelector": ".syllabus-item.learning-activity"
            },
            "Settings": {
                "Position": 3,
                "Version": 2,
                "leftOffset": -10,
                "topOffset": 0,
                "isSticky": 1,
                "stickinessType": 1,
                "embedInParent": true,
                "stepHlObj": {
                    "top": 0,
                    "left": 0,
                    "width": 0,
                    "height": 0
                }
            },
            "Mode": 0
        }],
        "Surveys": [],
        "ConditionTrees": {
            "DisplayRules": {
                "Root": {
                    "Nodes": [],
                    "Id": 82012,
                    "Type": 0,
                    "Settings": {
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": "/cp/modules/view/id/"
                        }
                    }
                },
                "Id": 42343,
                "ConditionType": "DisplayRules"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 18949,
        "OrderIndex": 7,
        "Name": "Labs Tip"
    }, {
        "Flow": {
            "Id": 72006,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 797017,
            "Nodes": {
                "728731": {
                    "UIElements": [{
                        "Id": 536148,
                        "Type": "Element",
                        "Title": "Ready to test your skills?",
                        "Text": "Check out Cloud Assessments",
                        "PointIndex": 2,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/nav[1]/div[3]/a[1]",
                                "elementAbsX": 75.11666870117188,
                                "elementAbsY": 0,
                                "bodyWidth": 2065,
                                "bodyHeight": 1057,
                                "elementHeight": 32.76667,
                                "elementWidth": 28,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/dashboard"
                                },
                                "relativeLeft": 75.11666870117188,
                                "centeredElementWidth": 2065,
                                "textArray": ["logoicon"],
                                "autoQuery": "NAV[id=\"ssoNav\"] A",
                                "href": "https://www.cloudassessments.com/c/#/dashboard",
                                "target": "_blank",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 631663,
                            "Type": "Click",
                            "IdentifySettings": null,
                            "Settings": {},
                            "Name": "Click",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": null,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 728731,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "797017": {
                    "ActionType": "WaitForCondition",
                    "Links": [{
                        "Id": 310912,
                        "Name": null,
                        "TargetFlowNodeId": 728731,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {
                        "WaitFor": {
                            "Root": {
                                "Nodes": [],
                                "Id": 687864,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "UrlEquals",
                                    "funcArgs": {
                                        "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                    }
                                }
                            },
                            "Id": 359953,
                            "ConditionType": "WaitFor"
                        }
                    },
                    "Id": 797017,
                    "Type": "Action",
                    "Name": "Wait For Rules",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {}
                    }
                }
            }
        },
        "FlowId": 72006,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "once"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [],
                    "Id": 648356,
                    "Type": 0,
                    "Settings": {
                        "funcName": "TaskGoalReached",
                        "funcArgs": {
                            "TaskId": 72646,
                            "GoalId": 227376
                        }
                    }
                },
                "Id": 336904,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 227387,
            "Name": "User Clicked",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "ElementClicked",
                    "funcArgs": {
                        "IdentifySettings": {
                            "IsIdentifyByText": false,
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/nav[1]/div[3]/a[1]",
                                "elementAbsX": 75.11666870117188,
                                "elementAbsY": 0,
                                "bodyWidth": 2065,
                                "bodyHeight": 1057,
                                "elementHeight": 32.76667,
                                "elementWidth": 28,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/modules/view/id/119"
                                },
                                "relativeLeft": 75.11666870117188,
                                "centeredElementWidth": 2065,
                                "textArray": ["logoicon"],
                                "autoQuery": "NAV[id=\"ssoNav\"] A",
                                "href": "https://www.cloudassessments.com/c/#/dashboard",
                                "target": "_blank"
                            },
                            "StepSensitivity": 1
                        }
                    },
                    "nodeDepth": 0,
                    "ConditionId": "e69e0e49065c59e5f8df87fd04074fda",
                    "lastUpdateTime": 1516149250243
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 112724,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 112724,
        "OrderIndex": 10,
        "Name": "Check out Cloud Assessments"
    }, {
        "Flow": {
            "Id": 72007,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 732973,
            "Nodes": {
                "728753": {
                    "UIElements": [{
                        "Id": 536168,
                        "Type": "Element",
                        "Title": "",
                        "Text": "See how industry experts are using these technologies in production every day!",
                        "PointIndex": 2,
                        "ConditionTrees": {},
                        "Settings": {
                            "Position": 2,
                            "lv": 1
                        },
                        "IdentifySettings": {
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/nav[1]/div[5]/a[1]",
                                "elementAbsX": 152.23333740234375,
                                "elementAbsY": 113.9000015258789,
                                "bodyWidth": 2065,
                                "bodyHeight": 1057,
                                "elementHeight": 32.76667,
                                "elementWidth": 17,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/modules/view/id/154"
                                },
                                "relativeLeft": 152.23333740234375,
                                "centeredElementWidth": 2065,
                                "textArray": null,
                                "autoQuery": "NAV[id=\"ssoNav\"] A",
                                "href": "https://scaleyourcode.com",
                                "extended": {
                                    "xpathArray": "",
                                    "xpathArrayToIframe": "",
                                    "xpathArrayToIframeNoBodyAndHtml": "",
                                    "elementIframe": "",
                                    "elementType": ""
                                }
                            },
                            "StepSensitivity": 1
                        },
                        "Triggers": [{
                            "Id": 631688,
                            "Type": "Delay",
                            "IdentifySettings": null,
                            "Settings": {
                                "Duration": 8
                            },
                            "Name": "Delay",
                            "TargetFlowNodeId": null,
                            "ConditionTrees": {}
                        }],
                        "DesignTemplateId": 26860,
                        "DesignTemplatePlaceholderConfigs": [],
                        "AccessibilityConfigs": [],
                        "IsSticky": true
                    }],
                    "Id": 728753,
                    "Type": "UI",
                    "Name": null,
                    "PointIndex": 0,
                    "ErrorHandlingParentId": null,
                    "Settings": {}
                },
                "732973": {
                    "ActionType": "WaitForCondition",
                    "Links": [{
                        "Id": 284463,
                        "Name": null,
                        "TargetFlowNodeId": 728753,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {
                        "WaitFor": {
                            "Root": {
                                "Nodes": [],
                                "Id": 651314,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "UrlContains",
                                    "funcArgs": {
                                        "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                    }
                                }
                            },
                            "Id": 338545,
                            "ConditionType": "WaitFor"
                        }
                    },
                    "Id": 732973,
                    "Type": "Action",
                    "Name": "Wait For Rules",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {}
                    }
                }
            }
        },
        "FlowId": 72007,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "once"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [],
                    "Id": 651313,
                    "Type": 0,
                    "Settings": {
                        "funcName": "TaskGoalReached",
                        "funcArgs": {
                            "TaskId": 71767,
                            "GoalId": 224439
                        }
                    }
                },
                "Id": 336927,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [{
            "Id": 227389,
            "Name": "User Clicked Scale your Code",
            "Settings": {
                "Conditions": {
                    "nodeType": "Func",
                    "funcName": "ElementClicked",
                    "funcArgs": {
                        "IdentifySettings": {
                            "IsIdentifyByText": false,
                            "IgnorePosition": 1,
                            "ElementDescription": {
                                "elementXpath": "/html[1]/body[1]/nav[1]/div[5]/a[1]",
                                "elementAbsX": 152.23333740234375,
                                "elementAbsY": 0,
                                "bodyWidth": 2065,
                                "bodyHeight": 1057,
                                "elementHeight": 32.76667,
                                "elementWidth": 17,
                                "elementText": "",
                                "elementLocation": {
                                    "hostname": "linuxacademy.com",
                                    "pathname": "/cp/modules/view/id/119"
                                },
                                "relativeLeft": 152.23333740234375,
                                "centeredElementWidth": 2065,
                                "textArray": null,
                                "autoQuery": "NAV[id=\"ssoNav\"] A",
                                "href": "https://scaleyourcode.com"
                            },
                            "StepSensitivity": 1
                        }
                    },
                    "nodeDepth": 0,
                    "ConditionId": "5fbffca21716d29647247534eb33d0f1",
                    "lastUpdateTime": 1516149286938
                }
            },
            "GoalType": 19,
            "RelatedObjectId": 112726,
            "IsDeleted": false,
            "IsMainGoal": true,
            "GoalSaveAmount": 0,
            "ShouldDelete": false
        }],
        "Id": 112726,
        "OrderIndex": 11,
        "Name": "Check out Scale your Code"
    }, {
        "Flow": {
            "Id": 99277,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1068946,
            "Nodes": {
                "1068946": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 420971,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1068946,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS30day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 99277,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 8567,
            "BusinessSolutionId": 148155,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 889979,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 896409,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 889976,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 889978,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "30"
                                            }
                                        }
                                    }],
                                    "Id": 896408,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1259854,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "60"
                                        }
                                    }
                                }],
                                "Id": 889977,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 889984,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1259853,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 896407,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS30day"
                                }
                            }
                        }],
                        "Id": 896406,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 889982,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 896405,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 469844,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 148155,
        "OrderIndex": 12,
        "Name": "NPS - 30 day Survey"
    }, {
        "Flow": {
            "Id": 99854,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1075304,
            "Nodes": {
                "1075304": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 424112,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1075304,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "WalkMeCookieTrue",
                            "value": "True",
                            "duration": "120"
                        }
                    }
                }
            }
        },
        "FlowId": 99854,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [],
                        "Id": 896448,
                        "Type": 0,
                        "Settings": {
                            "funcName": "UrlContains",
                            "funcArgs": {
                                "UrlInput": "https://linuxacademy.com/cp/dashboard"
                            }
                        }
                    }, {
                        "Nodes": [],
                        "Id": 968363,
                        "Type": 0,
                        "Settings": {
                            "funcName": "TaskGoalNotReached",
                            "funcArgs": {
                                "TaskId": 80319,
                                "GoalId": 246784
                            }
                        }
                    }],
                    "Id": 968362,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 473496,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 148942,
        "OrderIndex": 16,
        "Name": "WalkMe Cookie Check"
    }, {
        "Flow": null,
        "FlowId": null,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "segmentationEnabled": "false"
        },
        "SmartTips": [{
            "ForceNew": false,
            "PageId": null,
            "Info": {
                "ConditionTrees": {},
                "Id": 225969,
                "TooltipText": "Access your 2 free AWS labs here:[div][ul][li][url=https://linuxacademy.com/cp/livelabs/view/id/12]S3 Essentials - Lifecycle Policies[/url][/li][li][url=https://linuxacademy.com/cp/livelabs/view/id/2]S3 Essentials and Versioning[/url][/li][/ul][/div]",
                "TemplateId": null,
                "OrderIndex": 0,
                "GlobalStyleId": "Info",
                "IsWithIcon": false,
                "Type": 0,
                "Settings": {},
                "TooltipStyle": {
                    "textColor": "#000000",
                    "backColor": "#FFFFFF",
                    "borderColor": "#f70a0a"
                },
                "IsWithHighlighter": false
            },
            "PositiveFeedback": null,
            "Validations": [],
            "ConditionTrees": {
                "SmartTip": {
                    "Root": {
                        "Nodes": [],
                        "Id": 1215170,
                        "Type": 0,
                        "Settings": {
                            "funcName": "jQueryTrue",
                            "funcArgs": {
                                "jQuerySelector": ".free-trial"
                            }
                        }
                    },
                    "Id": 646527,
                    "ConditionType": "SmartTip"
                }
            },
            "Id": 178700,
            "OrderIndex": 0,
            "Name": "Hands-on Labs Button",
            "IsEnabled": true,
            "IdentifySettings": {
                "IgnorePosition": 1,
                "ElementDescription": {
                    "autoQuery": "DIV[id=\"main-nav\"] UL LI A",
                    "bodyHeight": 974,
                    "bodyWidth": 1903,
                    "centeredElementWidth": 1903,
                    "class": "labs-nav-extra-padding nav-simple-link",
                    "elementAbsX": 931.015625,
                    "elementAbsY": 110.328125,
                    "elementClass": "labs-nav-extra-padding nav-simple-link",
                    "elementHeight": 45,
                    "elementLocation": {
                        "hostname": "linuxacademy.com",
                        "pathname": "/cp/dashboard"
                    },
                    "elementText": "",
                    "elementWidth": 103,
                    "elementXpath": "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[5]/a[1]",
                    "href": "/cp/library/catalog/view/LiveLabs",
                    "p": true,
                    "relativeLeft": 931.015625,
                    "textArray": ["hands-onlabs"]
                },
                "StepSensitivity": 1
            },
            "Settings": {
                "Position": 1,
                "Version": 2,
                "leftOffset": 3,
                "topOffset": 0,
                "tooltipPosition": "2",
                "isEvaluationFrequency": 1
            },
            "Mode": 0
        }],
        "Surveys": [],
        "ConditionTrees": {},
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 198893,
        "OrderIndex": 18,
        "Name": "Home"
    }, {
        "Flow": {
            "Id": 142391,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1561434,
            "Nodes": {
                "1561434": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 624063,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1561434,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS60day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 142391,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 11351,
            "BusinessSolutionId": 205825,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 1259760,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 1259761,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 1259759,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 1259765,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "60"
                                            }
                                        }
                                    }],
                                    "Id": 1259764,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1259856,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "90"
                                        }
                                    }
                                }],
                                "Id": 1259762,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 1259763,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1259855,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 1259769,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS60day"
                                }
                            }
                        }],
                        "Id": 1259768,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 1259766,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 1259767,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 670492,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 205825,
        "OrderIndex": 19,
        "Name": "NPS - 60 day Survey"
    }, {
        "Flow": {
            "Id": 142393,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1561442,
            "Nodes": {
                "1561442": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 624068,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1561442,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS90day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 142393,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 11352,
            "BusinessSolutionId": 205827,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 1259774,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 1259775,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 1259773,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 1259779,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "90"
                                            }
                                        }
                                    }],
                                    "Id": 1259778,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1259859,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "150"
                                        }
                                    }
                                }],
                                "Id": 1259776,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 1259777,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1259858,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 1259783,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS90day"
                                }
                            }
                        }],
                        "Id": 1259782,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 1259780,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 1259781,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 670494,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 205827,
        "OrderIndex": 20,
        "Name": "NPS - 90 day Survey"
    }, {
        "Flow": {
            "Id": 142398,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1561479,
            "Nodes": {
                "1561479": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 624084,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1561479,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS300day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 142398,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 11355,
            "BusinessSolutionId": 205832,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 1259825,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 1259826,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 1259824,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 1259830,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "300"
                                            }
                                        }
                                    }],
                                    "Id": 1259829,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1389192,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "360"
                                        }
                                    }
                                }],
                                "Id": 1259827,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 1259828,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1389191,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 1259834,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS300day"
                                }
                            }
                        }],
                        "Id": 1259833,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 1259831,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 1259832,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 670512,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 205832,
        "OrderIndex": 20,
        "Name": "NPS - 300 day Survey"
    }, {
        "Flow": {
            "Id": 142394,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1561445,
            "Nodes": {
                "1561445": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 624069,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1561445,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS180day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 142394,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 11353,
            "BusinessSolutionId": 205828,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 1259785,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 1259786,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 1259784,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 1259790,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "180"
                                            }
                                        }
                                    }],
                                    "Id": 1259789,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1259861,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "240"
                                        }
                                    }
                                }],
                                "Id": 1259787,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 1259788,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1259860,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 1259794,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS180day"
                                }
                            }
                        }],
                        "Id": 1259793,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 1259791,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 1259792,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 670495,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 205828,
        "OrderIndex": 21,
        "Name": "NPS - 180 day Survey"
    }, {
        "Flow": {
            "Id": 142397,
            "Name": "",
            "Settings": {},
            "RootFlowNodeId": 1561478,
            "Nodes": {
                "1561478": {
                    "ActionType": "SetData",
                    "Links": [{
                        "Id": 624083,
                        "Name": null,
                        "TargetFlowNodeId": null,
                        "ConditionTrees": {}
                    }],
                    "ConditionTrees": {},
                    "Id": 1561478,
                    "Type": "Action",
                    "Name": "Set WM Data",
                    "PointIndex": 1,
                    "ErrorHandlingParentId": null,
                    "Settings": {
                        "actionArgs": {
                            "dataType": "Value",
                            "key": "NPS240day",
                            "value": "true",
                            "duration": "2592000"
                        }
                    }
                }
            }
        },
        "FlowId": 142397,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "IsVisible": "True",
            "ASEnabled": "1",
            "ASCTEnabled": "1",
            "ASRep": "always"
        },
        "SmartTips": [],
        "Surveys": [{
            "Id": 11354,
            "BusinessSolutionId": 205831,
            "SurveyId": 26705,
            "TriggerType": 0,
            "Frequency": 1
        }],
        "ConditionTrees": {
            "ASCT": {
                "Root": {
                    "Nodes": [{
                        "Nodes": [{
                            "Nodes": [{
                                "Nodes": [{
                                    "Nodes": [{
                                        "Nodes": [{
                                            "Nodes": [],
                                            "Id": 1259814,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "UrlContains",
                                                "funcArgs": {
                                                    "UrlInput": "https://linuxacademy.com/cp/dashboard"
                                                }
                                            }
                                        }, {
                                            "Nodes": [],
                                            "Id": 1259815,
                                            "Type": 0,
                                            "Settings": {
                                                "funcName": "TaskGoalReached",
                                                "funcArgs": {
                                                    "TaskId": 80319,
                                                    "GoalId": 246784
                                                }
                                            }
                                        }],
                                        "Id": 1259813,
                                        "Type": 1,
                                        "Settings": {}
                                    }, {
                                        "Nodes": [],
                                        "Id": 1259819,
                                        "Type": 0,
                                        "Settings": {
                                            "funcName": "WindowVarBigger",
                                            "funcArgs": {
                                                "WindowVarName": "wm_unixDate",
                                                "WindowVarInput": "240"
                                            }
                                        }
                                    }],
                                    "Id": 1259818,
                                    "Type": 1,
                                    "Settings": {}
                                }, {
                                    "Nodes": [],
                                    "Id": 1259863,
                                    "Type": 0,
                                    "Settings": {
                                        "funcName": "WindowVarSmaller",
                                        "funcArgs": {
                                            "WindowVarName": "wm_unixDate",
                                            "WindowVarInput": "300"
                                        }
                                    }
                                }],
                                "Id": 1259816,
                                "Type": 1,
                                "Settings": {}
                            }, {
                                "Nodes": [],
                                "Id": 1259817,
                                "Type": 0,
                                "Settings": {
                                    "funcName": "WalkMeDataNotExists",
                                    "funcArgs": {
                                        "DataKey": "NPSSurveyExistingUserRd1"
                                    }
                                }
                            }],
                            "Id": 1259862,
                            "Type": 1,
                            "Settings": {}
                        }, {
                            "Nodes": [],
                            "Id": 1259823,
                            "Type": 0,
                            "Settings": {
                                "funcName": "WalkMeDataNotExists",
                                "funcArgs": {
                                    "DataKey": "NPS240day"
                                }
                            }
                        }],
                        "Id": 1259822,
                        "Type": 1,
                        "Settings": {}
                    }, {
                        "Nodes": [],
                        "Id": 1259820,
                        "Type": 0,
                        "Settings": {
                            "funcName": "DateFrom",
                            "funcArgs": {
                                "DateInput": "04/03/2018"
                            }
                        }
                    }],
                    "Id": 1259821,
                    "Type": 1,
                    "Settings": {}
                },
                "Id": 670511,
                "ConditionType": "ASCT"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 205831,
        "OrderIndex": 22,
        "Name": "NPS - 240 day Survey"
    }, {
        "Flow": null,
        "FlowId": null,
        "IsFlow": false,
        "HasMainGoal": false,
        "Settings": {
            "segmentationEnabled": "true"
        },
        "SmartTips": [{
            "ForceNew": false,
            "PageId": null,
            "Info": {
                "ConditionTrees": {},
                "Id": 247833,
                "TooltipText": "Take this training for free now",
                "TemplateId": null,
                "OrderIndex": 0,
                "GlobalStyleId": "Info",
                "IsWithIcon": false,
                "Type": 0,
                "Settings": {},
                "TooltipStyle": null,
                "IsWithHighlighter": false
            },
            "PositiveFeedback": null,
            "Validations": [],
            "ConditionTrees": {},
            "Id": 195640,
            "OrderIndex": 0,
            "Name": "Training\n      ... SmartTip",
            "IsEnabled": true,
            "IdentifySettings": {
                "IgnorePosition": 1,
                "ElementDescription": {
                    "autoQuery": "DIV[id=\"library_overlay\"] UL LI A",
                    "bodyHeight": 969,
                    "bodyWidth": 1903,
                    "centeredElementWidth": 1903,
                    "class": "beta beta-link",
                    "elementAbsX": 580.984375,
                    "elementAbsY": 294.671875,
                    "elementClass": "beta beta-link",
                    "elementHeight": 25,
                    "elementLocation": {
                        "hostname": "linuxacademy.com",
                        "pathname": "/cp/dashboard"
                    },
                    "elementText": "",
                    "elementWidth": 158,
                    "elementXpath": "/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/a[1]",
                    "href": "https://beta.linuxacademy.com/#/quests",
                    "p": true,
                    "relativeLeft": 580.984375,
                    "textArray": ["explore", "quests"]
                },
                "StepSensitivity": 1
            },
            "Settings": {
                "Position": 1,
                "Version": 2,
                "leftOffset": 3,
                "topOffset": 0,
                "isSticky": 1,
                "stickinessType": 1
            },
            "Mode": 0
        }, {
            "ForceNew": false,
            "PageId": null,
            "Info": {
                "ConditionTrees": {},
                "Id": 247834,
                "TooltipText": "Take this training for free now",
                "TemplateId": null,
                "OrderIndex": 0,
                "GlobalStyleId": "Info",
                "IsWithIcon": false,
                "Type": 0,
                "Settings": {},
                "TooltipStyle": null,
                "IsWithHighlighter": false
            },
            "PositiveFeedback": null,
            "Validations": [],
            "ConditionTrees": {},
            "Id": 195641,
            "OrderIndex": 1,
            "Name": "Training\n      ... SmartTip",
            "IsEnabled": true,
            "IdentifySettings": {
                "IgnorePosition": 1,
                "ElementDescription": {
                    "autoQuery": "DIV[id=\"library_overlay\"] UL LI A",
                    "bodyHeight": 969,
                    "bodyWidth": 1903,
                    "centeredElementWidth": 1903,
                    "class": "beta beta-link",
                    "elementAbsX": 785.984375,
                    "elementAbsY": 294.671875,
                    "elementClass": "beta beta-link",
                    "elementHeight": 25,
                    "elementLocation": {
                        "hostname": "linuxacademy.com",
                        "pathname": "/cp/dashboard"
                    },
                    "elementText": "",
                    "elementWidth": 318,
                    "elementXpath": "/html[1]/body[1]/div[2]/header[1]/div[2]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/a[1]",
                    "href": "https://beta.linuxacademy.com/#/activities",
                    "p": true,
                    "relativeLeft": 785.984375,
                    "textArray": ["navigation", "learningactivities"]
                },
                "StepSensitivity": 1
            },
            "Settings": {
                "Position": 1,
                "Version": 2,
                "leftOffset": -50,
                "topOffset": 0,
                "isSticky": 1,
                "stickinessType": 1
            },
            "Mode": 0
        }],
        "Surveys": [],
        "ConditionTrees": {
            "DisplayRules": {
                "Root": {
                    "Nodes": [],
                    "Id": 1374052,
                    "Type": 0,
                    "Settings": {
                        "funcName": "UrlContains",
                        "funcArgs": {
                            "UrlInput": ".com/cp/dashboard"
                        }
                    }
                },
                "Id": 730633,
                "ConditionType": "DisplayRules"
            }
        },
        "Description": null,
        "KeyWords": "",
        "Goals": [],
        "Id": 223404,
        "OrderIndex": 24,
        "Name": "Dashboard Training"
    }]
      , c = []
      , L = []
      , u = []
      , p = []
      , O = []
      , A = []
      , U = [{
        "Id": 8244,
        "OrderIndex": 0,
        "Name": "http://linuxacademy.com",
        "UserSearchSettingsId": 7447
    }]
      , k = {
        "12": {
            "1": {
                "Html": "\u003cdiv class=\"wm-outer-div wm-shoutout wm-shoutout-{{Id}} wm-template-bg wm-template-business\" id=\"wm-shoutout-{{Id}}\"\u003e\r\n\t\u003cdiv class=\"wm-shoutout-icon\"\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-1 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-2 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-3 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-4 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-5 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-6 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-icon-square wm-icon-square-7 wm-main-border-left-color wm-main-border-right-color wm-main-border-top-color wm-main-border-bottom-color wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\t\u003cdiv class=\"wm-close-button {{XButtonClass}}\"\u003ex\u003c/div\u003e\r\n\t\u003cdiv class=\"wm-title wm-template-main-text\"\u003e{{{Title}}}\u003c/div\u003e\r\n\t\u003cdiv class=\"wm-content\"\u003e\r\n\t\t\u003cdiv class=\"wm-template-text\"\u003e{{{Description}}}\u003c/div\u003e\r\n\t\t\u003cdiv class=\"buttons-wrapper\"\u003e\r\n\t\t{{#Actions}}\r\n\t\t\t{{#destroy}}\r\n\t\t\t\u003cspan class=\"{{CssClass}} wm-close-link\"\u003e{{{Text}}}\u003c/span\u003e\r\n\t\t\t{{/destroy}}\r\n\t\t\t{{^destroy}}\r\n\t\t\t\u003cdiv class=\"{{CssClass}} wm-blue-btn wm-template-main-bg wm-main-border-bottom-darker wm-action-text-color wm-main-bg-hover\"\u003e{{{Text}}}\u003c/div\u003e\r\n\t\t\t{{/destroy}}\r\n\t\t{{/Actions}}\r\n\t\t\u003cdiv style=\"clear: both\"\u003e\u003c/div\u003e\r\n\t\t\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\u003c/div\u003e",
                "Css": {
                    "children": {
                        ".wm-content .wm-blue-btn:hover": {
                            "attributes": {
                                "background-color": "#43a3e1"
                            }
                        },
                        ".wm-content .wm-close-link:hover": {
                            "attributes": {
                                "color": "silver"
                            }
                        },
                        ".wm-ie-7 div.wm-blue-btn,.wm-ie-7 span.wm-close-link": {
                            "attributes": {
                                "float": "none",
                                "display": "inline-block",
                                "zoom": "1"
                            }
                        },
                        ".wm-ltr .wm-shoutout-icon": {
                            "attributes": {
                                "left": "21px"
                            }
                        },
                        ".wm-rtl .wm-shoutout-icon": {
                            "attributes": {
                                "right": "21px"
                            }
                        },
                        ".wm-ie-10 .wm-shoutout-icon,.wm-ie-11 .wm-shoutout-icon,.wm-ie-7 .wm-shoutout-icon,.wm-ie-8 .wm-shoutout-icon,.wm-ie-9 .wm-shoutout-icon": {
                            "attributes": {
                                "top": "26px"
                            }
                        },
                        ".wm-content .wm-blue-btn": {
                            "attributes": {
                                "display": "inline-block",
                                "color": "#fff",
                                "font-weight": "700",
                                "font-size": "16px",
                                "border-radius": "3px",
                                "-moz-border-radius": "3px",
                                "-webkit-border-radius": "3px",
                                "cursor": "pointer",
                                "transition": "background .2s",
                                "padding-top": "10px",
                                "padding-right": "16px",
                                "padding-bottom": "8px",
                                "padding-left": "16px",
                                "background-color": "#3393d1",
                                "border-top-style": "none",
                                "border-right-style": "none",
                                "border-bottom-style": "solid",
                                "border-left-style": "none",
                                "border-bottom-width": "4px",
                                "border-bottom-color": "#2883c7"
                            }
                        },
                        ".wm-blue-btn *": {
                            "attributes": {
                                "color": "#fff"
                            }
                        },
                        ".wm-ltr .wm-icon-square-1": {
                            "attributes": {
                                "top": "0",
                                "left": "0"
                            }
                        },
                        ".wm-ltr .wm-icon-square-2": {
                            "attributes": {
                                "top": "8px",
                                "left": "0"
                            }
                        },
                        ".wm-ltr .wm-icon-square-3": {
                            "attributes": {
                                "top": "16px",
                                "left": "0"
                            }
                        },
                        ".wm-ltr .wm-icon-square-4": {
                            "attributes": {
                                "top": "24px",
                                "left": "0"
                            }
                        },
                        ".wm-ltr .wm-icon-square-5": {
                            "attributes": {
                                "top": "8px",
                                "left": "8px"
                            }
                        },
                        ".wm-ltr .wm-icon-square-6": {
                            "attributes": {
                                "top": "16px",
                                "left": "8px"
                            }
                        },
                        ".wm-ltr .wm-icon-square-7": {
                            "attributes": {
                                "top": "12px",
                                "left": "16px"
                            }
                        },
                        ".wm-rtl .wm-icon-square-1": {
                            "attributes": {
                                "top": "0",
                                "right": "0"
                            }
                        },
                        ".wm-rtl .wm-icon-square-2": {
                            "attributes": {
                                "top": "8px",
                                "right": "0"
                            }
                        },
                        ".wm-rtl .wm-icon-square-3": {
                            "attributes": {
                                "top": "16px",
                                "right": "0"
                            }
                        },
                        ".wm-rtl .wm-icon-square-4": {
                            "attributes": {
                                "top": "24px",
                                "right": "0"
                            }
                        },
                        ".wm-rtl .wm-icon-square-5": {
                            "attributes": {
                                "top": "8px",
                                "right": "8px"
                            }
                        },
                        ".wm-outer-div.wm-shoutout": {
                            "attributes": {
                                "width": "368px",
                                "position": "relative",
                                "-webkit-box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "-moz-box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "padding-top": "22px",
                                "padding-right": "56px",
                                "padding-bottom": "32px",
                                "padding-left": "56px",
                                "background-color": "#fff"
                            }
                        },
                        ".wm-rtl .wm-icon-square-7": {
                            "attributes": {
                                "top": "12px",
                                "right": "16px"
                            }
                        },
                        ".wm-rtl .wm-icon-square-6": {
                            "attributes": {
                                "top": "16px",
                                "right": "8px"
                            }
                        },
                        ".wm-content .wm-close-link": {
                            "attributes": {
                                "color": "#a6a6a6",
                                "font-size": "14px",
                                "text-decoration": "underline",
                                "transition": "color .2s",
                                "cursor": "pointer",
                                "padding-top": "11px",
                                "padding-right": "0",
                                "padding-bottom": "9px",
                                "padding-left": "0"
                            }
                        },
                        ".wm-rtl .wm-content,.wm-rtl .wm-content *,.wm-rtl .wm-title": {
                            "attributes": {
                                "direction": "rtl",
                                "text-align": "right"
                            }
                        },
                        ".wm-ltr .wm-content,.wm-ltr .wm-content *,.wm-ltr .wm-title": {
                            "attributes": {
                                "direction": "ltr",
                                "text-align": "left"
                            }
                        },
                        ".wm-rtl .wm-blue-btn,.wm-rtl .wm-close-link": {
                            "attributes": {
                                "float": "right",
                                "margin-left": "28px"
                            }
                        },
                        ".wm-rtl .wm-close-button": {
                            "attributes": {
                                "left": "7px"
                            }
                        },
                        ".wm-ltr .wm-close-button": {
                            "attributes": {
                                "right": "7px"
                            }
                        },
                        ".wm-ltr .wm-blue-btn,.wm-ltr .wm-close-link": {
                            "attributes": {
                                "float": "left",
                                "margin-right": "28px"
                            }
                        },
                        ".wm-ltr .buttons-wrapper": {
                            "attributes": {
                                "margin-right": "-28px"
                            }
                        },
                        ".wm-rtl .buttons-wrapper": {
                            "attributes": {
                                "margin-left": "-28px"
                            }
                        },
                        ".buttons-wrapper": {
                            "attributes": {
                                "margin-top": "17px"
                            }
                        },
                        ".wm-close-button": {
                            "attributes": {
                                "position": "absolute",
                                "top": "4px",
                                "color": "#a6a6a6",
                                "font-size": "13px",
                                "line-height": "1",
                                "cursor": "pointer"
                            }
                        },
                        ".wm-content,.wm-content *": {
                            "attributes": {
                                "font-size": "14px",
                                "line-height": "21px"
                            }
                        },
                        ".wm-title": {
                            "attributes": {
                                "font-size": "31px",
                                "font-weight": "700",
                                "margin-bottom": "4px"
                            }
                        },
                        ".wm-icon-square": {
                            "attributes": {
                                "position": "absolute",
                                "width": "0",
                                "height": "0",
                                "background-color": "#3393d1",
                                "border-top-width": "2px",
                                "border-right-width": "2px",
                                "border-bottom-width": "2px",
                                "border-left-width": "2px",
                                "border-top-style": "solid",
                                "border-right-style": "solid",
                                "border-bottom-style": "solid",
                                "border-left-style": "solid",
                                "border-top-color": "#3393d1",
                                "border-right-color": "#3393d1",
                                "border-bottom-color": "#3393d1",
                                "border-left-color": "#3393d1"
                            }
                        },
                        ".wm-shoutout-icon": {
                            "attributes": {
                                "position": "absolute",
                                "width": "20px",
                                "height": "28px",
                                "top": "28px"
                            }
                        },
                        "*": {
                            "attributes": {
                                "font-family": "walkme-opensans,sans-serif",
                                "color": "#373737"
                            }
                        }
                    },
                    "metaData": {}
                },
                "ExternalCss": ""
            }
        },
        "8": {
            "1": {
                "Html": "\u003cdiv class=\"wm-outer-div wm-shoutout wm-shoutout-{{Id}} wm-template-bg wm-template-ribbon\" id=\"wm-shoutout-{{Id}}\"\u003e\r\n\t\u003cdiv class=\"wm-shoutout-ribbon\"\u003e\r\n\t\t\u003cdiv class=\"wm-main-ribbon wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-edge left wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-edge right wm-template-main-bg\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-ripple left wm-main-border-right-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-ripple left wm-dark\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-ripple right wm-main-border-top-color wm-main-border-left-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-ripple right wm-dark\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle right top wm-main-border-top-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle right top wm-dark\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle right bottom wm-main-border-left-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle right bottom wm-dark\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle left top wm-main-border-right-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle left top wm-dark\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle left bottom wm-main-border-bottom-color\"\u003e\u003c/div\u003e\r\n\t\t\u003cdiv class=\"wm-ribbon-triangle left bottom wm-dark\"\u003e\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\t\u003cdiv class=\"{{XButtonClass}} wm-close-button\"\u003ex\u003c/div\u003e\r\n\t\u003cdiv class=\"wm-title wm-template-main-text\"\u003e{{{Title}}}\u003c/div\u003e\r\n\t\u003cdiv class=\"wm-content\"\u003e\r\n\t\t\u003cdiv class=\"wm-template-text\"\u003e{{{Description}}}\u003c/div\u003e\r\n\t\t\u003cdiv class=\"buttons-wrapper\"\u003e{{#Actions}}{{#destroy}}\u003cspan class=\"{{CssClass}} wm-close-link\"\u003e{{{Text}}}\u003c/span\u003e{{/destroy}}{{^destroy}}\u003cspan class=\"{{CssClass}} wm-blue-btn wm-template-main-bg wm-main-border-bottom-darker wm-action-text-color wm-main-bg-hover\"\u003e{{{Text}}}\u003c/span\u003e{{/destroy}}{{/Actions}}\u003c/div\u003e\r\n\t\u003c/div\u003e\r\n\u003c/div\u003e",
                "Css": {
                    "children": {
                        ".wm-outer-div.wm-shoutout.wm-ie-7 .buttons-wrapper": {
                            "attributes": {
                                "display": "block"
                            }
                        },
                        ".wm-outer-div.wm-shoutout.wm-ie-7 .wm-content": {
                            "attributes": {
                                "display": "table",
                                "float": "left",
                                "width": "352px",
                                "position": "relative",
                                "left": "50%",
                                "margin-top": "0",
                                "margin-right": "0",
                                "margin-bottom": "0",
                                "margin-left": "-198px"
                            }
                        },
                        ".wm-outer-div.wm-shoutout.wm-ie-7 .wm-title": {
                            "attributes": {
                                "display": "block",
                                "text-align": "center",
                                "min-width": "412px"
                            }
                        },
                        ".wm-ribbon-triangle.right.bottom.wm-dark": {
                            "attributes": {
                                "border-top-color": "transparent",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "#000"
                            }
                        },
                        ".wm-ribbon-triangle.right.top.wm-dark": {
                            "attributes": {
                                "border-top-color": "#000",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-triangle.left.bottom.wm-dark": {
                            "attributes": {
                                "border-top-color": "transparent",
                                "border-right-color": "transparent",
                                "border-bottom-color": "#000",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-triangle.left.top.wm-dark": {
                            "attributes": {
                                "border-top-color": "transparent",
                                "border-right-color": "#000",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-triangle.left.bottom": {
                            "attributes": {
                                "border-top-width": "0",
                                "border-right-width": "0",
                                "border-bottom-width": "58px",
                                "border-left-width": "31px",
                                "border-top-color": "transparent",
                                "border-right-color": "transparent",
                                "border-bottom-color": "#369cd9",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-triangle.right.bottom": {
                            "attributes": {
                                "border-top-width": "58px",
                                "border-right-width": "0",
                                "border-bottom-width": "0",
                                "border-left-width": "31px",
                                "border-top-color": "transparent",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "#369cd9"
                            }
                        },
                        ".wm-outer-div.wm-shoutout.wm-ie-7,.wm-outer-div.wm-shoutout.wm-ie-7 *": {
                            "attributes": {
                                "display": "inline",
                                "zoom": "1"
                            }
                        },
                        ".wm-ribbon-triangle.right.top": {
                            "attributes": {
                                "border-top-width": "58px",
                                "border-right-width": "31px",
                                "border-bottom-width": "0",
                                "border-left-width": "0",
                                "border-top-color": "#369cd9",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-content .wm-blue-btn:hover": {
                            "attributes": {
                                "background-color": "#43a3e1"
                            }
                        },
                        ".wm-content .wm-close-link:hover": {
                            "attributes": {
                                "color": "silver"
                            }
                        },
                        ".wm-ribbon-ripple.wm-dark.right": {
                            "attributes": {
                                "border-top-color": "#000",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-ripple.wm-dark.left": {
                            "attributes": {
                                "border-right-color": "#000"
                            }
                        },
                        ".wm-ribbon-triangle.left.top": {
                            "attributes": {
                                "border-top-width": "0",
                                "border-right-width": "31px",
                                "border-bottom-width": "58px",
                                "border-left-width": "0",
                                "border-top-color": "transparent",
                                "border-right-color": "#369cd9",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-ripple.right": {
                            "attributes": {
                                "right": "-9px",
                                "border-top-width": "9px",
                                "border-right-width": "9px",
                                "border-bottom-width": "0",
                                "border-left-width": "0",
                                "border-top-color": "#369cd9",
                                "border-right-color": "transparent",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-content .wm-blue-btn": {
                            "attributes": {
                                "display": "inline-block",
                                "color": "#fff",
                                "font-weight": "700",
                                "font-size": "16px",
                                "letter-spacing": ".5px",
                                "border-radius": "3px",
                                "-moz-border-radius": "3px",
                                "-webkit-border-radius": "3px",
                                "cursor": "pointer",
                                "transition": "background .2s",
                                "padding-top": "10px",
                                "padding-right": "16px",
                                "padding-bottom": "8px",
                                "padding-left": "16px",
                                "margin-top": "21px",
                                "margin-right": "29px",
                                "margin-bottom": "0",
                                "margin-left": "29px",
                                "background-color": "#3393d1",
                                "border-top-style": "none",
                                "border-right-style": "none",
                                "border-bottom-style": "solid",
                                "border-left-style": "none",
                                "border-bottom-width": "4px",
                                "border-bottom-color": "#2d83b6"
                            }
                        },
                        ".wm-blue-btn *": {
                            "attributes": {
                                "color": "#fff"
                            }
                        },
                        ".wm-ribbon-triangle.bottom": {
                            "attributes": {
                                "bottom": "-9px"
                            }
                        },
                        ".wm-ribbon-triangle.right": {
                            "attributes": {
                                "right": "-31px"
                            }
                        },
                        ".wm-ribbon-triangle.left": {
                            "attributes": {
                                "left": "-31px"
                            }
                        },
                        ".wm-ribbon-triangle.wm-dark": {
                            "attributes": {
                                "opacity": ".08",
                                "-ms-filter": "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\"",
                                "filter": "alpha(opacity=10)"
                            }
                        },
                        ".wm-ribbon-ripple.wm-dark": {
                            "attributes": {
                                "opacity": ".57",
                                "-ms-filter": "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=57)\"",
                                "filter": "alpha(opacity=57)"
                            }
                        },
                        ".wm-outer-div.wm-shoutout": {
                            "attributes": {
                                "display": "inline-block",
                                "zoom": "1",
                                "position": "absolute",
                                "min-width": "412px",
                                "border-radius": "5px",
                                "-moz-border-radius": "5px",
                                "-webkit-border-radius": "5px",
                                "z-index": "2147483630",
                                "-webkit-box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "-moz-box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "box-shadow": "0 0 10px 0 rgba(50,50,50,.45)",
                                "padding-top": "30px",
                                "padding-right": "22px",
                                "padding-bottom": "20px",
                                "padding-left": "22px",
                                "background-color": "#fff"
                            }
                        },
                        ".wm-ribbon-ripple.left": {
                            "attributes": {
                                "left": "-9px",
                                "border-top-width": "0",
                                "border-right-width": "9px",
                                "border-bottom-width": "9px",
                                "border-left-width": "0",
                                "border-top-color": "transparent",
                                "border-right-color": "#369cd9",
                                "border-bottom-color": "transparent",
                                "border-left-color": "transparent"
                            }
                        },
                        ".wm-ribbon-triangle.top": {
                            "attributes": {
                                "top": "9px"
                            }
                        },
                        ".wm-ribbon-edge.right": {
                            "attributes": {
                                "right": "-9px"
                            }
                        },
                        ".wm-ribbon-edge.left": {
                            "attributes": {
                                "left": "-9px"
                            }
                        },
                        ".wm-rtl .wm-content,.wm-rtl .wm-content *": {
                            "attributes": {
                                "direction": "rtl"
                            }
                        },
                        ".wm-ltr .wm-content,.wm-ltr .wm-content *": {
                            "attributes": {
                                "direction": "ltr"
                            }
                        },
                        ".wm-rtl .wm-close-button": {
                            "attributes": {
                                "left": "6px"
                            }
                        },
                        ".wm-ltr .wm-close-button": {
                            "attributes": {
                                "right": "6px"
                            }
                        },
                        ".wm-content .wm-close-link": {
                            "attributes": {
                                "display": "inline-block",
                                "color": "#a6a6a6",
                                "font-size": "14px",
                                "text-decoration": "underline",
                                "transition": "color .2s",
                                "cursor": "pointer",
                                "margin-top": "10px",
                                "margin-right": "23px",
                                "margin-bottom": "18px",
                                "margin-left": "23px"
                            }
                        },
                        ".wm-content": {
                            "attributes": {
                                "max-width": "385px",
                                "margin-top": "0",
                                "margin-right": "auto",
                                "margin-bottom": "0",
                                "margin-left": "auto"
                            }
                        },
                        ".wm-ribbon-triangle": {
                            "attributes": {
                                "z-index": "2147483630"
                            }
                        },
                        ".wm-ribbon-ripple": {
                            "attributes": {
                                "top": "65px",
                                "z-index": "2147483631"
                            }
                        },
                        ".wm-close-button": {
                            "attributes": {
                                "position": "absolute",
                                "top": "3px",
                                "color": "#a6a6a6",
                                "font-size": "13px",
                                "line-height": "1",
                                "cursor": "pointer"
                            }
                        },
                        ".wm-title": {
                            "attributes": {
                                "text-align": "center",
                                "margin-bottom": "24px",
                                "min-height": "42px"
                            }
                        },
                        ".wm-template-text,.wm-template-text *": {
                            "attributes": {
                                "font-size": "14px",
                                "line-height": "21px",
                                "color": "#373737"
                            }
                        },
                        ".buttons-wrapper": {
                            "attributes": {
                                "text-align": "center",
                                "cursor": "default",
                                "margin-top": "17px",
                                "margin-right": "auto",
                                "margin-bottom": "0",
                                "margin-left": "auto"
                            }
                        },
                        ".wm-content,.wm-title": {
                            "attributes": {
                                "position": "relative",
                                "z-index": "2147483632"
                            }
                        },
                        ".wm-ribbon-ripple,.wm-ribbon-triangle": {
                            "attributes": {
                                "position": "absolute",
                                "width": "0",
                                "height": "0",
                                "border-top-style": "solid",
                                "border-right-style": "solid",
                                "border-bottom-style": "solid",
                                "border-left-style": "solid"
                            }
                        },
                        ".wm-template-text": {
                            "attributes": {
                                "display": "table",
                                "margin-top": "17px",
                                "margin-right": "auto",
                                "margin-bottom": "0",
                                "margin-left": "auto"
                            }
                        },
                        ".wm-ribbon-edge": {
                            "attributes": {
                                "height": "100%",
                                "width": "9px",
                                "position": "absolute",
                                "top": "0",
                                "z-index": "2147483631",
                                "background-color": "#369cd9"
                            }
                        },
                        ".wm-main-ribbon": {
                            "attributes": {
                                "width": "100%",
                                "height": "100%",
                                "background-color": "#369cd9"
                            }
                        },
                        ".wm-shoutout-ribbon": {
                            "attributes": {
                                "position": "absolute",
                                "width": "100%",
                                "height": "65px",
                                "top": "20px",
                                "left": "0",
                                "z-index": "2147483631"
                            }
                        },
                        ".wm-title,.wm-title *": {
                            "attributes": {
                                "font-size": "31px",
                                "color": "#fff",
                                "font-weight": "700"
                            }
                        },
                        "*": {
                            "attributes": {
                                "font-family": "walkme-opensans,sans-serif"
                            }
                        }
                    },
                    "metaData": {}
                },
                "ExternalCss": ""
            }
        }
    }
      , N = {}
      , g = [{
        "id": 26860,
        "userId": 163776,
        "name": "",
        "type": 2,
        "creationDate": "2018-01-12T23:44:24.000Z",
        "css": ".wm-design-template-26860 .walkme-custom-balloon-content {\n  width: 150px !important;\n  height: 80px !important;\n}",
        "bbCode": null,
        "entityType": 0,
        "isDefault": false,
        "imageUrl": null,
        "shoutOutUiTemplateId": null,
        "html": null,
        "lastUpdateDate": "1970-01-01T00:00:01.000Z",
        "originalTemplateId": null,
        "platform": 1,
        "categories": []
    }, {
        "id": 32660,
        "userId": 163776,
        "name": "",
        "type": 2,
        "creationDate": "2018-02-12T15:57:49.000Z",
        "css": ".wm-design-template-32660 .walkme-custom-balloon-title {\n  font-size: 20px !important;\n}",
        "bbCode": null,
        "entityType": 0,
        "isDefault": false,
        "imageUrl": null,
        "shoutOutUiTemplateId": null,
        "html": "",
        "lastUpdateDate": "1970-01-01T00:00:01.000Z",
        "originalTemplateId": null,
        "platform": 1,
        "categories": []
    }, {
        "id": 32662,
        "userId": 163776,
        "name": "The Natural",
        "type": 1,
        "creationDate": "2018-02-12T16:01:31.000Z",
        "css": "/* white basic SO */\n\n.wm-design-template-32662.wm-outer-div {\n  width: auto !important;\n  min-width: 400px !important;\n  max-width: 500px !important;\n  padding: 37px 35px 26px 35px !important;\n  border-bottom: 4px solid #3397d1 !important;\n  -webkit-border-radius: 2px !important;\n  -moz-border-radius: 2px !important;\n  border-radius: 2px !important;\n  background-color: #fff !important;\n  -webkit-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-sizing: border-box !important;\n  box-sizing: border-box !important;\n}\n\n.wm-design-template-32662 .wm-title {\n  margin-bottom: 9px !important;\n  color: #3397D1 !important;\n  font-size: 18px !important;\n  font-weight: normal !important;\n  text-align: center !important;\n  text-transform: uppercase !important;\n}\n\n.wm-design-template-32662 .wm-title b,\n.wm-design-template-32662 .wm-title u,\n.wm-design-template-32662 .wm-title i,\n.wm-design-template-32662 .wm-title div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32662 .wm-title b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32662 .wm-close-button {\n  right: 8px !important;\n  top: 3px !important;\n  color: #D8D8D8 !important;\n}\n\n.wm-design-template-32662 .wm-close-button:hover {\n  color: #AFAFAF !important;\n}\n\n.wm-design-template-32662 .wm-template-text {\n  font-size: 14px !important;\n  font-weight: 300 !important;\n  color: #1C203E !important;\n  text-align: center !important;\n}\n\n.wm-design-template-32662 .wm-template-text b,\n.wm-design-template-32662 .wm-template-text u,\n.wm-design-template-32662 .wm-template-text i,\n.wm-design-template-32662 .wm-template-text a,\n.wm-design-template-32662 .wm-template-text div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32662 .wm-template-text b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32662 .buttons-wrapper {\n  display: table !important;\n  margin: 48px auto 0 auto !important;\n}\n\n.wm-design-template-32662 .wm-blue-btn {\n  float: left !important;\n  padding: 9px 27px !important;\n  margin: 0 !important;\n  -webkit-border-radius: 2px !important;\n  -moz-border-radius: 2px !important;\n  border-radius: 2px !important;\n  background-color: #3397D1 !important;\n  color: #fff !important;\n  font-size: 14px !important;\n  font-weight: bold !important;\n}\n\n.wm-design-template-32662 .wm-blue-btn:hover {\n  background-color: #1777AE !important;\n}\n\n.wm-design-template-32662 .wm-close-link {\n  float: right !important;\n  padding: 9px 27px !important;\n  margin: 0 !important;\n  margin-left: 30px !important;\n  font-size: 14px !important;\n  font-weight: normal !important;\n  color: #919191 !important;\n  text-decoration: none !important;\n}\n\n.wm-design-template-32662 .wm-close-link:hover {\n  color: #929292 !important;\n}",
        "bbCode": null,
        "entityType": 17,
        "isDefault": false,
        "imageUrl": "https://cdn.walkme.com/player/resources/images/templates/blueborder.png",
        "shoutOutUiTemplateId": 10,
        "html": "",
        "lastUpdateDate": "1970-01-01T00:00:01.000Z",
        "originalTemplateId": null,
        "platform": 1,
        "categories": []
    }, {
        "id": 32663,
        "userId": 163776,
        "name": "Blue Lagoon",
        "type": 1,
        "creationDate": "2018-02-12T16:01:52.000Z",
        "css": "/* white basic SO */\n\n.wm-design-template-32663.wm-outer-div {\n  width: auto !important;\n  min-width: 450px !important;\n  max-width: 500px !important;\n  padding: 38px 30px 40px 30px !important;\n  -webkit-border-radius: 2px !important;\n  -moz-border-radius: 2px !important;\n  border-radius: 2px !important;\n  background-color: #00C3FF !important;\n  -webkit-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-sizing: border-box !important;\n  box-sizing: border-box !important;\n}\n\n.wm-design-template-32663 .wm-title {\n  margin-bottom: 9px !important;\n  color: #fff !important;\n  font-size: 18px !important;\n  font-weight: 500 !important;\n  text-align: center !important;\n}\n\n.wm-design-template-32663 .wm-title b,\n.wm-design-template-32663 .wm-title u,\n.wm-design-template-32663 .wm-title i,\n.wm-design-template-32663 .wm-title div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32663 .wm-title b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32663 .wm-close-button {\n  right: 8px !important;\n  top: 3px !important;\n  color: #fff !important;\n}\n\n.wm-design-template-32663 .wm-close-button:hover {\n  color: #fff !important;\n}\n\n.wm-design-template-32663 .wm-template-text {\n  font-size: 14px !important;\n  font-weight: normal !important;\n  color: #fff !important;\n  text-align: center !important;\n}\n\n.wm-design-template-32663 .wm-template-text b,\n.wm-design-template-32663 .wm-template-text u,\n.wm-design-template-32663 .wm-template-text i,\n.wm-design-template-32663 .wm-template-text a,\n.wm-design-template-32663 .wm-template-text div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32663 .wm-template-text b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32663 .buttons-wrapper {\n  display: table !important;\n  margin: 43px auto 0 auto !important;\n}\n\n.wm-design-template-32663 .wm-blue-btn {\n  float: left !important;\n  padding: 5px 12px !important;\n  margin: 0 !important;\n  -webkit-border-radius: 26px !important;\n  -moz-border-radius: 26px !important;\n  border-radius: 26px !important;\n  border: 1px solid #fff !important;\n  background-color: #fff !important;\n  color: #00C3FF !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n}\n\n.wm-design-template-32663 .wm-blue-btn:hover {\n  background-color: #00C3FF  !important;\n  color: #fff !important;\n}\n\n.wm-design-template-32663 .wm-close-link {\n  float: right !important;\n  padding: 5px 12px !important;\n  margin: 0 !important;\n  margin-left: 22px !important;\n  border: 1px solid #fff !important;\n  -webkit-border-radius: 26px !important;\n  -moz-border-radius: 26px !important;\n  border-radius: 26px !important;\n  background-color: #00C3FF  !important;\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #fff !important;\n  text-decoration: none !important;\n}\n\n.wm-design-template-32663 .wm-close-link:hover {\n  background-color: #fff !important;\n  color: #00C3FF !important;\n}",
        "bbCode": null,
        "entityType": 17,
        "isDefault": false,
        "imageUrl": "https://cdn.walkme.com/player/resources/images/templates/indigo.png",
        "shoutOutUiTemplateId": 10,
        "html": "",
        "lastUpdateDate": "1970-01-01T00:00:01.000Z",
        "originalTemplateId": null,
        "platform": 1,
        "categories": []
    }, {
        "id": 32668,
        "userId": 163776,
        "name": "Blue Lagoon",
        "type": 2,
        "creationDate": "2018-02-12T16:09:49.000Z",
        "css": "/* white basic SO */\n\n.wm-design-template-32668.wm-outer-div {\n  width: auto !important;\n  min-width: 450px !important;\n  max-width: 500px !important;\n  padding: 38px 30px 40px 30px !important;\n  -webkit-border-radius: 2px !important;\n  -moz-border-radius: 2px !important;\n  border-radius: 2px !important;\n  background-color: #fff !important;\n  -webkit-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  box-shadow: 3px 2px 13px 4px rgba(130,131,160,0.2) !important;\n  -moz-box-sizing: border-box !important;\n  box-sizing: border-box !important;\n}\n\n.wm-design-template-32668 .wm-title {\n  margin-bottom: 9px !important;\n  color: #29485B !important;\n  font-size: 18px !important;\n  font-weight: 500 !important;\n  text-align: center !important;\n}\n\n.wm-design-template-32668 .wm-title b,\n.wm-design-template-32668 .wm-title u,\n.wm-design-template-32668 .wm-title i,\n.wm-design-template-32668 .wm-title div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32668 .wm-title b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32668 .wm-close-button {\n  right: 8px !important;\n  top: 3px !important;\n  color: #fff !important;\n}\n\n.wm-design-template-32668 .wm-close-button:hover {\n  color: #fff !important;\n}\n\n.wm-design-template-32668 .wm-template-text {\n  font-size: 14px !important;\n  font-weight: normal !important;\n  color: #29485B !important;\n  text-align: center !important;\n}\n\n.wm-design-template-32668 .wm-template-text b,\n.wm-design-template-32668 .wm-template-text u,\n.wm-design-template-32668 .wm-template-text i,\n.wm-design-template-32668 .wm-template-text a,\n.wm-design-template-32668 .wm-template-text div {\n  font-size: inherit !important;\n  color: inherit !important;\n  text-align: inherit !important;\n}\n\n.wm-design-template-32668 .wm-template-text b {\n  font-weight: bold !important;\n}\n\n.wm-design-template-32668 .buttons-wrapper {\n  display: table !important;\n  margin: 43px auto 0 auto !important;\n}\n\n.wm-design-template-32668 .wm-blue-btn {\n  float: left !important;\n  padding: 5px 12px !important;\n  margin: 0 !important;\n  -webkit-border-radius: 4px !important;\n  -moz-border-radius: 4px !important;\n  border-radius: 4px !important;\n  border: 1px solid #1BB398 !important;\n  background-color: #1BB398 !important;\n  color: #fff !important;\n  font-size: 12px !important;\n  font-weight: 500 !important;\n}\n\n.wm-design-template-32668 .wm-blue-btn:hover {\n  background-color: #29485B  !important;\n  color: #fff !important;\n}\n\n.wm-design-template-32668 .wm-close-link {\n  float: right !important;\n  padding: 5px 12px !important;\n  margin: 0 !important;\n  margin-left: 22px !important;\n  border: 1px solid #fff !important;\n  -webkit-border-radius: 26px !important;\n  -moz-border-radius: 26px !important;\n  border-radius: 26px !important;\n  background-color: #00C3FF  !important;\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #fff !important;\n  text-decoration: none !important;\n  display: none !important;\n}\n\n.wm-design-template-32668 .wm-close-link:hover {\n  background-color: #fff !important;\n  color: #00C3FF !important;\n}\n\n",
        "bbCode": null,
        "entityType": 17,
        "isDefault": false,
        "imageUrl": null,
        "shoutOutUiTemplateId": 10,
        "html": "",
        "lastUpdateDate": "1970-01-01T00:00:01.000Z",
        "originalTemplateId": null,
        "platform": 1,
        "categories": []
    }, {
        "id": 64682,
        "userId": 163776,
        "name": "Bavaria",
        "type": 1,
        "creationDate": "2018-06-28T21:31:46.000Z",
        "css": "/* Theme 1 Custom Shoutouts -- START */\n\n.wm-design-template-64682.wm-outer-div {\n  width: auto !important;\n  min-width: 400px !important;\n  max-width: 500px !important;\n  padding: 0 !important;\n  background-color: #4178be !important;\n  -moz-box-sizing: border-box !important;\n  box-sizing: border-box !important;\n}\n\n/* X */\n\n.wm-design-template-64682 .wm-close-button.walkme-x-button {\n  top: 9px !important;\n  right: 12px !important;\n  font-size: 1px !important;\n  color: transparent !important;\n}\n\n.wm-design-template-64682 .wm-close-button.walkme-x-button:before {\n  content: \u0027×\u0027 !important;\n  font-family: sans-serif !important;\n  font-size: 24px !important;\n  font-weight: 100 !important;\n  color: rgba(255, 255, 255, 1.0) !important;\n}\n\n/* Title */\n\n.wm-design-template-64682 .wm-title.wm-template-main-text {\n  margin: 34px 40px 10px !important;\n  text-align: center !important;\n  font-size: 24px !important;\n  font-weight: 100 !important;\n  color: #ffffff !important;\n}\n\n.wm-design-template-64682 .wm-title b,\n.wm-design-template-64682 .wm-title u,\n.wm-design-template-64682 .wm-title i,\n.wm-design-template-64682 .wm-title div {\n  font-size: inherit !important;\n  color: inherit !important;\n}\n\n.wm-design-template-64682 .wm-title b {\n  font-weight: bold !important;\n}\n\n/* Content */\n\n.wm-design-template-64682 .wm-content .wm-template-text {\n  margin: 0 40px 40px !important;\n  text-align: center !important;\n}\n\n.wm-design-template-64682 .wm-content .wm-template-text,\n.wm-design-template-64682 .wm-content .wm-template-text * {\n  text-align: center !important;\n  font-size: 13px !important;\n  font-weight: 100 !important;\n  line-height: normal !important;\n  color: #ffffff !important;\n}\n\n.wm-design-template-64682 .wm-template-text b,\n.wm-design-template-64682 .wm-template-text u,\n.wm-design-template-64682 .wm-template-text i,\n.wm-design-template-64682 .wm-template-text a,\n.wm-design-template-64682 .wm-template-text div {\n  font-size: inherit !important;\n  color: inherit !important;\n}\n\n.wm-design-template-64682 .wm-template-text b {\n  font-weight: bold !important;\n}\n\n/* Buttons */\n\n.wm-design-template-64682 .buttons-wrapper {\n  margin: 0 !important;\n  padding: 20px !important;\n  background-color: #ffffff !important;\n  text-align: center !important;\n}\n\n.wm-design-template-64682 .buttons-wrapper .wm-blue-btn.wm-template-main-bg {\n  min-width: 66px !important;\n  float: none !important;\n  padding: 4px 18px !important;\n  background-color: #4178be !important;\n  border: 2px solid #4178be !important;\n  border-radius: 18px !important;\n  text-align: center !important;\n  font-size: 14px !important;\n  font-weight: 100 !important;\n  color: #ffffff !important;\n}\n\n.wm-design-template-64682 .buttons-wrapper .wm-blue-btn.wm-template-main-bg:hover {\n  background-color: transparent !important;\n  border: 2px solid #4178be !important;\n  color: #4178be !important;\n}\n\n.wm-design-template-64682 .buttons-wrapper .walkme-action-destroy-0.wm-close-link,\n.wm-design-template-64682 .buttons-wrapper .walkme-action-destroy-1.wm-close-link,\n.wm-design-template-64682 .buttons-wrapper .walkme-action-remindMeNextDay-1.wm-close-link,\n.wm-design-template-64682 .buttons-wrapper .walkme-action-remindMeNextTime-1.wm-close-link {\n  min-width: 66px !important;\n  float: none !important;\n  margin: 0 !important;\n  padding: 4px 32px !important;\n  background-color: transparent !important;\n  border: 2px solid #4178be !important;\n  border-radius: 18px !important;\n  text-align: center !important;\n  font-size: 14px !important;\n  font-weight: 100 !important;\n  text-decoration: none !important;\n  color: #4178be !important;\n}\n\n/* Theme 1 Custom Shoutouts -- END */",
        "bbCode": null,
        "entityType": 17,
        "isDefault": false,
        "imageUrl": "https://cdn.walkme.com/player/resources/images/templates/bavaria.png?v=1",
        "shoutOutUiTemplateId": 10,
        "html": "",
        "lastUpdateDate": "2018-06-28T21:31:46.000Z",
        "originalTemplateId": 825,
        "platform": 1,
        "categories": []
    }, {
        "id": 64683,
        "userId": 163776,
        "name": "Ribbon",
        "type": 1,
        "creationDate": "2018-06-28T21:33:42.000Z",
        "css": "",
        "bbCode": null,
        "entityType": 17,
        "isDefault": false,
        "imageUrl": "https://cdn.walkme.com/player/resources/images/templates/ribbon.png",
        "shoutOutUiTemplateId": 8,
        "html": "",
        "lastUpdateDate": "2018-06-28T21:33:42.000Z",
        "originalTemplateId": 28,
        "platform": 1,
        "categories": []
    }]
      , P = []
      , R = "###TEACH_ME_CONFIG###"
      , v = "70c5e13ae17d404abc5dbf81d27b21e3";
    function D(e, _, l, k, N, v, D, f, h, M, x, B, V, F, K, b, y, W, Y, j, q, z, J, Q, X) {
        e && (a = e),
        _ && (t = _),
        l && (n = l),
        k && (S = k),
        N && (i = N),
        v && (r = v),
        W && (s = W),
        D && (o = D),
        f && (T = f),
        h && (m = h),
        M && (w = M),
        x && (d = x),
        B && (E = B),
        V && (C = V),
        F && (I = F),
        K && (c = K),
        b && (L = b),
        y && (u = y),
        Y && (p = Y),
        j && (O = j),
        q && (A = q),
        z && (U = z),
        J && (g = J),
        Q && (P = Q),
        X && (R = X),
        G(),
        H(),
        window._makeTutorial && _makeTutorial.dataFileLoaded()
    }
    function G() {
        window.walkme_special_tutorials && (t = walkme_special_tutorials),
        window.walkme_special_site_config && (a = walkme_special_site_config)
    }
    function H() {
        try {
            _makeTutorial.appendDataPackage({
                Tutorials: t,
                SiteConfig: a,
                Tasks: n,
                UserGuid: v,
                Labels: l,
                Launchers: S,
                LauncherCustomImages: i,
                LauncherHtmlImages: r,
                PageIdentifiers: s,
                Surveys: _,
                Contents: o,
                Categories: T,
                Collections: m,
                Shuttles: w,
                ShoutOuts: d,
                Tags: E,
                ConditionBlocks: C,
                ExtraData: e,
                UITemplates: k,
                UIVariations: N,
                BusinessSolutions: I,
                Lessons: c,
                Courses: L,
                TrackedPages: u,
                Spotlights: p,
                Tooltips: O,
                TrackedElements: A,
                SearchProviderUrls: U,
                DesignTemplates: g,
                PluginConfigs: P,
                TeachMeConfig: R
            })
        } catch (D) {
            _makeTutorial.lib_error(D)
        }
    }
    D.apply(null, arguments)
}
wmContext && new WalkMeDataClass,
window._walkmeInternals && _walkmeInternals.addTimeStamp && _walkmeInternals.addTimeStamp("dataCodeEnd");
