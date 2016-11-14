define(
   ({
  	
    general: {
      cancel: "Abbrechen",
      close: "Schließen",
    	none: "ä_None__Ü",
    	ok: "ä_OK__Ü",
    	other: "ä_Other___Ü",
    	stamp: "ä_Stamp___Ü"
    },
    
    editor: {
      noMetadata: "Für dieses Element sind keine Metadaten vorhanden.",
    	xmlViewOnly: "ä_This type of metadata can only be viewed as an XML________________Ü.",
    	editorDialog: {
    		caption: "ä_Metadata___Ü",
    		captionPattern: "ä_Metadata for {title}_______Ü"
    	},
    	primaryToolbar: {
    		view: "ä_View__Ü",
    		viewXml: "ä_View XML___Ü",
    		edit: "ä_Edit__Ü",
    		initializing: "ä_Loading____Ü...",
    		startingEditor: "ä_Starting editor______Ü...",
    		loadingDocument: "ä_Loading document_______Ü...",
    		updatingDocument: "ä_Updating document_______Ü...",
    		generatingView: "ä_Generating view______Ü...",
    		errors: {
    			errorGeneratingView: "ä_An error occurred while generating the view______________Ü.",
    			errorLoadingDocument: "ä_An error occurred while loading the document_______________Ü."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ä_Your document has changes that have not been saved________________Ü.",
    		dialogTitle: "ä_Close Metadata Editor_______Ü",
    		closeButton: "ä_Discard & Close______Ü"
    	},
    	download: {
    		caption: "ä_Download___Ü",
    		dialogTitle: "ä_Download___Ü",
    		prompt: "ä_Click here to download your file___________Ü."
    	},
    	load: {
    		caption: "ä_Load__Ü",
    		dialogTitle: "ä_Load Metadata_____Ü",
    		typeTab: "ä_A Type___Ü",
    		fileTab: "ä_A File___Ü",
    		templateTab: "ä_A Template____Ü",
    		itemTab: "ä_Your Item____Ü",
    		filePrompt: "ä_Select a local XML file________Ü:",
    		templatePrompt: "ä_Select a local XML file (key properties will be updated)__________________Ü:",
    		pullItem: "ä_Update metadata with key properties of your item________________Ü.",
    		importWarning: "ä_The selected file did not match a supported format________________Ü.",
    		loading: "ä_Loading____Ü...",
    		noMetadata: "ä_Metadata can be created for this item by choosing one of the following options_________________________Ü.",
    		unrecognizedMetadata: "ä_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Ü.",
    		errorLoading: "ä_There was an error while loading___________Ü.",
    		warnings: {
    			badFile: "ä_The selected file could not be loaded____________Ü.",
    			notAnXml: "ä_The selected file is not an XML file____________Ü.",
    			notSupported: "ä_This type of file is not supported____________Ü."
    		}
    	},
    	save: {
    		caption: "ä_Save__Ü",
    		dialogTitle: "ä_Save Metadata_____Ü",
    		working: "ä_Saving metadata______Ü...",
    		errorSaving: "ä_An error occurred, your metadata was not saved_______________Ü.",
    		saveDialog: {
    			pushCaption: "ä_Apply changes to your item_________Ü"
    		}
    	},
    	saveAndClose: {
    		caption: "ä_Save & Close_____Ü"
    	},
    	saveDraft: {
    		caption: "ä_Draft___Ü",
    		dialogTitle: "ä_Save a Local Draft______Ü"
    	},
    	del: {
    		caption: "ä_Delete___Ü",
    		dialogTitle: "ä_Delete Metadata______Ü",
    		prompt: "ä_Are you sure you want to delete this metadata_______________Ü?",
    		working: "ä_Deleting metadata_______Ü...",
    		errorDeleting: "ä_An error occurred, your metadata was not deleted________________Ü."
    	},
    	transform: {
    		caption: "ä_Transform____Ü",
    		dialogTitle: "ä_Transform To_____Ü",
    		prompt: "",
    		working: "ä_Transforming______Ü...",
    		errorTransforming: "ä_An error occurred while transforming your document________________Ü."
    	},
    	errorDialog: {
    		dialogTitle: "ä_There was an error______Ü"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ä_Metadata___Ü"
      	}
      }
    },
    
  	calendar: {
  		button: "ä_Calendar____Ü...",
  		title: "ä_Calendar___Ü"
  	},
    
  	geoExtent: {
  		button: "ä_Set Geographic Extent________Ü...",
  		title: "ä_Geographic Extent______Ü",
  		navigate: "ä_Navigate___Ü",
  		draw: "ä_Draw a Rectangle______Ü",
  		drawHint: "ä_Press down to start and let go to finish_____________Ü."
  	},
  	
    hints: {
    	date: "ä_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ü",
    	dateTime: "ä_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Ü",
    	dateOrDateTime: "ä_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Ü",
    	delimitedTextArea: "ä_(use comma or newline to separate)___________Ü",
    	fgdcDate: "ä_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ü",
    	fgdcTime: "ä_(hh:mm:ss.sss[+-]hh:mm)________Ü",
    	integer: "ä_(enter an integer)______Ü",
    	latitude: "ä_(decimal degrees)______Ü",
    	longitude: "ä_(decimal degrees)______Ü",
    	number: "ä_(enter a number)______Ü",
    	numberGreaterThanZero: "ä_(enter a number > 0)_______Ü"
    },
    
    isoTopicCategoryCode: {
    	caption: "ä_Topic Category_____Ü",
    	boundaries: "ä_Administrative and Political Boundaries_____________Ü",
    	farming: "ä_Agriculture and Farming________Ü",
    	climatologyMeteorologyAtmosphere: "ä_Atmosphere and Climatic________Ü",
    	biota: "ä_Biology and Ecology_______Ü",
    	economy: "ä_Business and Economic_______Ü",
    	planningCadastre: "ä_Cadastral____Ü",
    	society: "ä_Cultural, Society and Demography___________Ü",
    	elevation: "ä_Elevation and Derived Products__________Ü",
    	environment: "ä_Environment and Conservation_________Ü",
    	structure: "ä_Facilities and Structures_________Ü",
    	geoscientificInformation: "ä_Geological and Geophysical_________Ü",
    	health: "ä_Human Health and Disease________Ü",
    	imageryBaseMapsEarthCover: "ä_Imagery and Base Maps_______Ü",
    	inlandWaters: "ä_Inland Water Resources________Ü",
    	location: "ä_Locations and Geodetic Networks__________Ü",
    	intelligenceMilitary: "ä_Military___Ü",
    	oceans: "ä_Oceans and Estuaries_______Ü",
    	transportation: "ä_Transportation Networks________Ü",
    	utilitiesCommunication: "ä_Utilities and Communication_________Ü"
    },
    
    multiplicity: {
    	moveElementDown: "ä_Move Section Down______Ü",
    	moveElementUp: "ä_Move Section Up______Ü",
    	removeElement: "ä_Remove Section_____Ü",
    	repeatElement: "ä_Repeat Section_____Ü"
    },
    
    serviceTypes: {
  		featureService: "ä_Feature Service______Ü",
  		mapService: "ä_Map Service____Ü",
  		imageService: "ä_Image Service_____Ü",
  		wms: "ä_WMS__Ü",
  		wfs: "ä_WFS__Ü",
  		wcs: "ä_WCS__Ü"
    },
    
    validation: {
    	pattern: "ä_{label} - {message}_______Ü",
    	patternWithHint: "ä_{label} - {message} {hint}_________Ü",
	    ok: "ä_OK__Ü",
	    empty: "ä_A value is required_______Ü.",
	    date: "ä_The value must be a date_________Ü.",
	    integer: "ä_The value must be an integer__________Ü.",
	    number: "ä_The value must be an number_________Ü.",
	    other: "ä_Invalid value_____Ü."
    },
    
    validationPane: {
    	clearMessages: "ä_Clear Messages_____Ü"
    }
    
  })
);
