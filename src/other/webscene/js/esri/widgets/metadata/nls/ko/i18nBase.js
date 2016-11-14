define(
   ({
  	
    general: {
      cancel: "취소",
      close: "닫기",
    	none: "한_None__빠",
    	ok: "한_OK__빠",
    	other: "한_Other___빠",
    	stamp: "한_Stamp___빠"
    },
    
    editor: {
      noMetadata: "이 항목의 메타데이터가 없습니다.",
    	xmlViewOnly: "한_This type of metadata can only be viewed as an XML________________빠.",
    	editorDialog: {
    		caption: "한_Metadata___빠",
    		captionPattern: "한_Metadata for {title}_______빠"
    	},
    	primaryToolbar: {
    		view: "한_View__빠",
    		viewXml: "한_View XML___빠",
    		edit: "한_Edit__빠",
    		initializing: "한_Loading____빠...",
    		startingEditor: "한_Starting editor______빠...",
    		loadingDocument: "한_Loading document_______빠...",
    		updatingDocument: "한_Updating document_______빠...",
    		generatingView: "한_Generating view______빠...",
    		errors: {
    			errorGeneratingView: "한_An error occurred while generating the view______________빠.",
    			errorLoadingDocument: "한_An error occurred while loading the document_______________빠."
    		}
    	},
    	changesNotSaved: {
    		prompt: "한_Your document has changes that have not been saved________________빠.",
    		dialogTitle: "한_Close Metadata Editor_______빠",
    		closeButton: "한_Discard & Close______빠"
    	},
    	download: {
    		caption: "한_Download___빠",
    		dialogTitle: "한_Download___빠",
    		prompt: "한_Click here to download your file___________빠."
    	},
    	load: {
    		caption: "한_Load__빠",
    		dialogTitle: "한_Load Metadata_____빠",
    		typeTab: "한_A Type___빠",
    		fileTab: "한_A File___빠",
    		templateTab: "한_A Template____빠",
    		itemTab: "한_Your Item____빠",
    		filePrompt: "한_Select a local XML file________빠:",
    		templatePrompt: "한_Select a local XML file (key properties will be updated)__________________빠:",
    		pullItem: "한_Update metadata with key properties of your item________________빠.",
    		importWarning: "한_The selected file did not match a supported format________________빠.",
    		loading: "한_Loading____빠...",
    		noMetadata: "한_Metadata can be created for this item by choosing one of the following options_________________________빠.",
    		unrecognizedMetadata: "한_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________빠.",
    		errorLoading: "한_There was an error while loading___________빠.",
    		warnings: {
    			badFile: "한_The selected file could not be loaded____________빠.",
    			notAnXml: "한_The selected file is not an XML file____________빠.",
    			notSupported: "한_This type of file is not supported____________빠."
    		}
    	},
    	save: {
    		caption: "한_Save__빠",
    		dialogTitle: "한_Save Metadata_____빠",
    		working: "한_Saving metadata______빠...",
    		errorSaving: "한_An error occurred, your metadata was not saved_______________빠.",
    		saveDialog: {
    			pushCaption: "한_Apply changes to your item_________빠"
    		}
    	},
    	saveAndClose: {
    		caption: "한_Save & Close_____빠"
    	},
    	saveDraft: {
    		caption: "한_Draft___빠",
    		dialogTitle: "한_Save a Local Draft______빠"
    	},
    	del: {
    		caption: "한_Delete___빠",
    		dialogTitle: "한_Delete Metadata______빠",
    		prompt: "한_Are you sure you want to delete this metadata_______________빠?",
    		working: "한_Deleting metadata_______빠...",
    		errorDeleting: "한_An error occurred, your metadata was not deleted________________빠."
    	},
    	transform: {
    		caption: "한_Transform____빠",
    		dialogTitle: "한_Transform To_____빠",
    		prompt: "",
    		working: "한_Transforming______빠...",
    		errorTransforming: "한_An error occurred while transforming your document________________빠."
    	},
    	errorDialog: {
    		dialogTitle: "한_There was an error______빠"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "한_Metadata___빠"
      	}
      }
    },
    
  	calendar: {
  		button: "한_Calendar____빠...",
  		title: "한_Calendar___빠"
  	},
    
  	geoExtent: {
  		button: "한_Set Geographic Extent________빠...",
  		title: "한_Geographic Extent______빠",
  		navigate: "한_Navigate___빠",
  		draw: "한_Draw a Rectangle______빠",
  		drawHint: "한_Press down to start and let go to finish_____________빠."
  	},
  	
    hints: {
    	date: "한_(yyyy or yyyy-mm or yyyy-mm-dd)__________빠",
    	dateTime: "한_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________빠",
    	dateOrDateTime: "한_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________빠",
    	delimitedTextArea: "한_(use comma or newline to separate)___________빠",
    	fgdcDate: "한_(yyyy or yyyy-mm or yyyy-mm-dd)__________빠",
    	fgdcTime: "한_(hh:mm:ss.sss[+-]hh:mm)________빠",
    	integer: "한_(enter an integer)______빠",
    	latitude: "한_(decimal degrees)______빠",
    	longitude: "한_(decimal degrees)______빠",
    	number: "한_(enter a number)______빠",
    	numberGreaterThanZero: "한_(enter a number > 0)_______빠"
    },
    
    isoTopicCategoryCode: {
    	caption: "한_Topic Category_____빠",
    	boundaries: "한_Administrative and Political Boundaries_____________빠",
    	farming: "한_Agriculture and Farming________빠",
    	climatologyMeteorologyAtmosphere: "한_Atmosphere and Climatic________빠",
    	biota: "한_Biology and Ecology_______빠",
    	economy: "한_Business and Economic_______빠",
    	planningCadastre: "한_Cadastral____빠",
    	society: "한_Cultural, Society and Demography___________빠",
    	elevation: "한_Elevation and Derived Products__________빠",
    	environment: "한_Environment and Conservation_________빠",
    	structure: "한_Facilities and Structures_________빠",
    	geoscientificInformation: "한_Geological and Geophysical_________빠",
    	health: "한_Human Health and Disease________빠",
    	imageryBaseMapsEarthCover: "한_Imagery and Base Maps_______빠",
    	inlandWaters: "한_Inland Water Resources________빠",
    	location: "한_Locations and Geodetic Networks__________빠",
    	intelligenceMilitary: "한_Military___빠",
    	oceans: "한_Oceans and Estuaries_______빠",
    	transportation: "한_Transportation Networks________빠",
    	utilitiesCommunication: "한_Utilities and Communication_________빠"
    },
    
    multiplicity: {
    	moveElementDown: "한_Move Section Down______빠",
    	moveElementUp: "한_Move Section Up______빠",
    	removeElement: "한_Remove Section_____빠",
    	repeatElement: "한_Repeat Section_____빠"
    },
    
    serviceTypes: {
  		featureService: "한_Feature Service______빠",
  		mapService: "한_Map Service____빠",
  		imageService: "한_Image Service_____빠",
  		wms: "한_WMS__빠",
  		wfs: "한_WFS__빠",
  		wcs: "한_WCS__빠"
    },
    
    validation: {
    	pattern: "한_{label} - {message}_______빠",
    	patternWithHint: "한_{label} - {message} {hint}_________빠",
	    ok: "한_OK__빠",
	    empty: "한_A value is required_______빠.",
	    date: "한_The value must be a date_________빠.",
	    integer: "한_The value must be an integer__________빠.",
	    number: "한_The value must be an number_________빠.",
	    other: "한_Invalid value_____빠."
    },
    
    validationPane: {
    	clearMessages: "한_Clear Messages_____빠"
    }
    
  })
);
