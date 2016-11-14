define(
   ({
  	
    general: {
      cancel: "Anuluj",
      close: "Zamknij",
    	none: "ł_None__ą",
    	ok: "ł_OK__ą",
    	other: "ł_Other___ą",
    	stamp: "ł_Stamp___ą"
    },
    
    editor: {
      noMetadata: "Brak metadanych dla tego elementu.",
    	xmlViewOnly: "ł_This type of metadata can only be viewed as an XML________________ą.",
    	editorDialog: {
    		caption: "ł_Metadata___ą",
    		captionPattern: "ł_Metadata for {title}_______ą"
    	},
    	primaryToolbar: {
    		view: "ł_View__ą",
    		viewXml: "ł_View XML___ą",
    		edit: "ł_Edit__ą",
    		initializing: "ł_Loading____ą...",
    		startingEditor: "ł_Starting editor______ą...",
    		loadingDocument: "ł_Loading document_______ą...",
    		updatingDocument: "ł_Updating document_______ą...",
    		generatingView: "ł_Generating view______ą...",
    		errors: {
    			errorGeneratingView: "ł_An error occurred while generating the view______________ą.",
    			errorLoadingDocument: "ł_An error occurred while loading the document_______________ą."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ł_Your document has changes that have not been saved________________ą.",
    		dialogTitle: "ł_Close Metadata Editor_______ą",
    		closeButton: "ł_Discard & Close______ą"
    	},
    	download: {
    		caption: "ł_Download___ą",
    		dialogTitle: "ł_Download___ą",
    		prompt: "ł_Click here to download your file___________ą."
    	},
    	load: {
    		caption: "ł_Load__ą",
    		dialogTitle: "ł_Load Metadata_____ą",
    		typeTab: "ł_A Type___ą",
    		fileTab: "ł_A File___ą",
    		templateTab: "ł_A Template____ą",
    		itemTab: "ł_Your Item____ą",
    		filePrompt: "ł_Select a local XML file________ą:",
    		templatePrompt: "ł_Select a local XML file (key properties will be updated)__________________ą:",
    		pullItem: "ł_Update metadata with key properties of your item________________ą.",
    		importWarning: "ł_The selected file did not match a supported format________________ą.",
    		loading: "ł_Loading____ą...",
    		noMetadata: "ł_Metadata can be created for this item by choosing one of the following options_________________________ą.",
    		unrecognizedMetadata: "ł_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ą.",
    		errorLoading: "ł_There was an error while loading___________ą.",
    		warnings: {
    			badFile: "ł_The selected file could not be loaded____________ą.",
    			notAnXml: "ł_The selected file is not an XML file____________ą.",
    			notSupported: "ł_This type of file is not supported____________ą."
    		}
    	},
    	save: {
    		caption: "ł_Save__ą",
    		dialogTitle: "ł_Save Metadata_____ą",
    		working: "ł_Saving metadata______ą...",
    		errorSaving: "ł_An error occurred, your metadata was not saved_______________ą.",
    		saveDialog: {
    			pushCaption: "ł_Apply changes to your item_________ą"
    		}
    	},
    	saveAndClose: {
    		caption: "ł_Save & Close_____ą"
    	},
    	saveDraft: {
    		caption: "ł_Draft___ą",
    		dialogTitle: "ł_Save a Local Draft______ą"
    	},
    	del: {
    		caption: "ł_Delete___ą",
    		dialogTitle: "ł_Delete Metadata______ą",
    		prompt: "ł_Are you sure you want to delete this metadata_______________ą?",
    		working: "ł_Deleting metadata_______ą...",
    		errorDeleting: "ł_An error occurred, your metadata was not deleted________________ą."
    	},
    	transform: {
    		caption: "ł_Transform____ą",
    		dialogTitle: "ł_Transform To_____ą",
    		prompt: "",
    		working: "ł_Transforming______ą...",
    		errorTransforming: "ł_An error occurred while transforming your document________________ą."
    	},
    	errorDialog: {
    		dialogTitle: "ł_There was an error______ą"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ł_Metadata___ą"
      	}
      }
    },
    
  	calendar: {
  		button: "ł_Calendar____ą...",
  		title: "ł_Calendar___ą"
  	},
    
  	geoExtent: {
  		button: "ł_Set Geographic Extent________ą...",
  		title: "ł_Geographic Extent______ą",
  		navigate: "ł_Navigate___ą",
  		draw: "ł_Draw a Rectangle______ą",
  		drawHint: "ł_Press down to start and let go to finish_____________ą."
  	},
  	
    hints: {
    	date: "ł_(yyyy or yyyy-mm or yyyy-mm-dd)__________ą",
    	dateTime: "ł_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ą",
    	dateOrDateTime: "ł_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ą",
    	delimitedTextArea: "ł_(use comma or newline to separate)___________ą",
    	fgdcDate: "ł_(yyyy or yyyy-mm or yyyy-mm-dd)__________ą",
    	fgdcTime: "ł_(hh:mm:ss.sss[+-]hh:mm)________ą",
    	integer: "ł_(enter an integer)______ą",
    	latitude: "ł_(decimal degrees)______ą",
    	longitude: "ł_(decimal degrees)______ą",
    	number: "ł_(enter a number)______ą",
    	numberGreaterThanZero: "ł_(enter a number > 0)_______ą"
    },
    
    isoTopicCategoryCode: {
    	caption: "ł_Topic Category_____ą",
    	boundaries: "ł_Administrative and Political Boundaries_____________ą",
    	farming: "ł_Agriculture and Farming________ą",
    	climatologyMeteorologyAtmosphere: "ł_Atmosphere and Climatic________ą",
    	biota: "ł_Biology and Ecology_______ą",
    	economy: "ł_Business and Economic_______ą",
    	planningCadastre: "ł_Cadastral____ą",
    	society: "ł_Cultural, Society and Demography___________ą",
    	elevation: "ł_Elevation and Derived Products__________ą",
    	environment: "ł_Environment and Conservation_________ą",
    	structure: "ł_Facilities and Structures_________ą",
    	geoscientificInformation: "ł_Geological and Geophysical_________ą",
    	health: "ł_Human Health and Disease________ą",
    	imageryBaseMapsEarthCover: "ł_Imagery and Base Maps_______ą",
    	inlandWaters: "ł_Inland Water Resources________ą",
    	location: "ł_Locations and Geodetic Networks__________ą",
    	intelligenceMilitary: "ł_Military___ą",
    	oceans: "ł_Oceans and Estuaries_______ą",
    	transportation: "ł_Transportation Networks________ą",
    	utilitiesCommunication: "ł_Utilities and Communication_________ą"
    },
    
    multiplicity: {
    	moveElementDown: "ł_Move Section Down______ą",
    	moveElementUp: "ł_Move Section Up______ą",
    	removeElement: "ł_Remove Section_____ą",
    	repeatElement: "ł_Repeat Section_____ą"
    },
    
    serviceTypes: {
  		featureService: "ł_Feature Service______ą",
  		mapService: "ł_Map Service____ą",
  		imageService: "ł_Image Service_____ą",
  		wms: "ł_WMS__ą",
  		wfs: "ł_WFS__ą",
  		wcs: "ł_WCS__ą"
    },
    
    validation: {
    	pattern: "ł_{label} - {message}_______ą",
    	patternWithHint: "ł_{label} - {message} {hint}_________ą",
	    ok: "ł_OK__ą",
	    empty: "ł_A value is required_______ą.",
	    date: "ł_The value must be a date_________ą.",
	    integer: "ł_The value must be an integer__________ą.",
	    number: "ł_The value must be an number_________ą.",
	    other: "ł_Invalid value_____ą."
    },
    
    validationPane: {
    	clearMessages: "ł_Clear Messages_____ą"
    }
    
  })
);
