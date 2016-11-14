define(
   ({
  	
    general: {
      cancel: "בטל",
      close: "סגור",
    	none: "כן_None__ש",
    	ok: "כן_OK__ש",
    	other: "כן_Other___ש",
    	stamp: "כן_Stamp___ש"
    },
    
    editor: {
      noMetadata: "אין מטה-דאטה לפריט הזה.",
    	xmlViewOnly: "כן_This type of metadata can only be viewed as an XML________________ש.",
    	editorDialog: {
    		caption: "כן_Metadata___ש",
    		captionPattern: "כן_Metadata for {title}_______ש"
    	},
    	primaryToolbar: {
    		view: "כן_View__ש",
    		viewXml: "כן_View XML___ש",
    		edit: "כן_Edit__ש",
    		initializing: "כן_Loading____ש...",
    		startingEditor: "כן_Starting editor______ש...",
    		loadingDocument: "כן_Loading document_______ש...",
    		updatingDocument: "כן_Updating document_______ש...",
    		generatingView: "כן_Generating view______ש...",
    		errors: {
    			errorGeneratingView: "כן_An error occurred while generating the view______________ש.",
    			errorLoadingDocument: "כן_An error occurred while loading the document_______________ש."
    		}
    	},
    	changesNotSaved: {
    		prompt: "כן_Your document has changes that have not been saved________________ש.",
    		dialogTitle: "כן_Close Metadata Editor_______ש",
    		closeButton: "כן_Discard & Close______ש"
    	},
    	download: {
    		caption: "כן_Download___ש",
    		dialogTitle: "כן_Download___ש",
    		prompt: "כן_Click here to download your file___________ש."
    	},
    	load: {
    		caption: "כן_Load__ש",
    		dialogTitle: "כן_Load Metadata_____ש",
    		typeTab: "כן_A Type___ש",
    		fileTab: "כן_A File___ש",
    		templateTab: "כן_A Template____ש",
    		itemTab: "כן_Your Item____ש",
    		filePrompt: "כן_Select a local XML file________ש:",
    		templatePrompt: "כן_Select a local XML file (key properties will be updated)__________________ש:",
    		pullItem: "כן_Update metadata with key properties of your item________________ש.",
    		importWarning: "כן_The selected file did not match a supported format________________ש.",
    		loading: "כן_Loading____ש...",
    		noMetadata: "כן_Metadata can be created for this item by choosing one of the following options_________________________ש.",
    		unrecognizedMetadata: "כן_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ש.",
    		errorLoading: "כן_There was an error while loading___________ש.",
    		warnings: {
    			badFile: "כן_The selected file could not be loaded____________ש.",
    			notAnXml: "כן_The selected file is not an XML file____________ש.",
    			notSupported: "כן_This type of file is not supported____________ש."
    		}
    	},
    	save: {
    		caption: "כן_Save__ש",
    		dialogTitle: "כן_Save Metadata_____ש",
    		working: "כן_Saving metadata______ש...",
    		errorSaving: "כן_An error occurred, your metadata was not saved_______________ש.",
    		saveDialog: {
    			pushCaption: "כן_Apply changes to your item_________ש"
    		}
    	},
    	saveAndClose: {
    		caption: "כן_Save & Close_____ש"
    	},
    	saveDraft: {
    		caption: "כן_Draft___ש",
    		dialogTitle: "כן_Save a Local Draft______ש"
    	},
    	del: {
    		caption: "כן_Delete___ש",
    		dialogTitle: "כן_Delete Metadata______ש",
    		prompt: "כן_Are you sure you want to delete this metadata_______________ש?",
    		working: "כן_Deleting metadata_______ש...",
    		errorDeleting: "כן_An error occurred, your metadata was not deleted________________ש."
    	},
    	transform: {
    		caption: "כן_Transform____ש",
    		dialogTitle: "כן_Transform To_____ש",
    		prompt: "",
    		working: "כן_Transforming______ש...",
    		errorTransforming: "כן_An error occurred while transforming your document________________ש."
    	},
    	errorDialog: {
    		dialogTitle: "כן_There was an error______ש"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "כן_Metadata___ש"
      	}
      }
    },
    
  	calendar: {
  		button: "כן_Calendar____ש...",
  		title: "כן_Calendar___ש"
  	},
    
  	geoExtent: {
  		button: "כן_Set Geographic Extent________ש...",
  		title: "כן_Geographic Extent______ש",
  		navigate: "כן_Navigate___ש",
  		draw: "כן_Draw a Rectangle______ש",
  		drawHint: "כן_Press down to start and let go to finish_____________ש."
  	},
  	
    hints: {
    	date: "כן_(yyyy or yyyy-mm or yyyy-mm-dd)__________ש",
    	dateTime: "כן_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ש",
    	dateOrDateTime: "כן_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ש",
    	delimitedTextArea: "כן_(use comma or newline to separate)___________ש",
    	fgdcDate: "כן_(yyyy or yyyy-mm or yyyy-mm-dd)__________ש",
    	fgdcTime: "כן_(hh:mm:ss.sss[+-]hh:mm)________ש",
    	integer: "כן_(enter an integer)______ש",
    	latitude: "כן_(decimal degrees)______ש",
    	longitude: "כן_(decimal degrees)______ש",
    	number: "כן_(enter a number)______ש",
    	numberGreaterThanZero: "כן_(enter a number > 0)_______ש"
    },
    
    isoTopicCategoryCode: {
    	caption: "כן_Topic Category_____ש",
    	boundaries: "כן_Administrative and Political Boundaries_____________ש",
    	farming: "כן_Agriculture and Farming________ש",
    	climatologyMeteorologyAtmosphere: "כן_Atmosphere and Climatic________ש",
    	biota: "כן_Biology and Ecology_______ש",
    	economy: "כן_Business and Economic_______ש",
    	planningCadastre: "כן_Cadastral____ש",
    	society: "כן_Cultural, Society and Demography___________ש",
    	elevation: "כן_Elevation and Derived Products__________ש",
    	environment: "כן_Environment and Conservation_________ש",
    	structure: "כן_Facilities and Structures_________ש",
    	geoscientificInformation: "כן_Geological and Geophysical_________ש",
    	health: "כן_Human Health and Disease________ש",
    	imageryBaseMapsEarthCover: "כן_Imagery and Base Maps_______ש",
    	inlandWaters: "כן_Inland Water Resources________ש",
    	location: "כן_Locations and Geodetic Networks__________ש",
    	intelligenceMilitary: "כן_Military___ש",
    	oceans: "כן_Oceans and Estuaries_______ש",
    	transportation: "כן_Transportation Networks________ש",
    	utilitiesCommunication: "כן_Utilities and Communication_________ש"
    },
    
    multiplicity: {
    	moveElementDown: "כן_Move Section Down______ש",
    	moveElementUp: "כן_Move Section Up______ש",
    	removeElement: "כן_Remove Section_____ש",
    	repeatElement: "כן_Repeat Section_____ש"
    },
    
    serviceTypes: {
  		featureService: "כן_Feature Service______ש",
  		mapService: "כן_Map Service____ש",
  		imageService: "כן_Image Service_____ש",
  		wms: "כן_WMS__ש",
  		wfs: "כן_WFS__ש",
  		wcs: "כן_WCS__ש"
    },
    
    validation: {
    	pattern: "כן_{label} - {message}_______ש",
    	patternWithHint: "כן_{label} - {message} {hint}_________ש",
	    ok: "כן_OK__ש",
	    empty: "כן_A value is required_______ש.",
	    date: "כן_The value must be a date_________ש.",
	    integer: "כן_The value must be an integer__________ש.",
	    number: "כן_The value must be an number_________ש.",
	    other: "כן_Invalid value_____ש."
    },
    
    validationPane: {
    	clearMessages: "כן_Clear Messages_____ש"
    }
    
  })
);
