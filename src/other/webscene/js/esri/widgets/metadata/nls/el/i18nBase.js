define(
   ({
  	
    general: {
      cancel: "Ακύρωση",
      close: "Κλείσιμο",
    	none: "π_None__Ω",
    	ok: "π_OK__Ω",
    	other: "π_Other___Ω",
    	stamp: "π_Stamp___Ω"
    },
    
    editor: {
      noMetadata: "Δεν υπάρχουν μεταδεδομένα για αυτό το αντικείμενο.",
    	xmlViewOnly: "π_This type of metadata can only be viewed as an XML________________Ω.",
    	editorDialog: {
    		caption: "π_Metadata___Ω",
    		captionPattern: "π_Metadata for {title}_______Ω"
    	},
    	primaryToolbar: {
    		view: "π_View__Ω",
    		viewXml: "π_View XML___Ω",
    		edit: "π_Edit__Ω",
    		initializing: "π_Loading____Ω...",
    		startingEditor: "π_Starting editor______Ω...",
    		loadingDocument: "π_Loading document_______Ω...",
    		updatingDocument: "π_Updating document_______Ω...",
    		generatingView: "π_Generating view______Ω...",
    		errors: {
    			errorGeneratingView: "π_An error occurred while generating the view______________Ω.",
    			errorLoadingDocument: "π_An error occurred while loading the document_______________Ω."
    		}
    	},
    	changesNotSaved: {
    		prompt: "π_Your document has changes that have not been saved________________Ω.",
    		dialogTitle: "π_Close Metadata Editor_______Ω",
    		closeButton: "π_Discard & Close______Ω"
    	},
    	download: {
    		caption: "π_Download___Ω",
    		dialogTitle: "π_Download___Ω",
    		prompt: "π_Click here to download your file___________Ω."
    	},
    	load: {
    		caption: "π_Load__Ω",
    		dialogTitle: "π_Load Metadata_____Ω",
    		typeTab: "π_A Type___Ω",
    		fileTab: "π_A File___Ω",
    		templateTab: "π_A Template____Ω",
    		itemTab: "π_Your Item____Ω",
    		filePrompt: "π_Select a local XML file________Ω:",
    		templatePrompt: "π_Select a local XML file (key properties will be updated)__________________Ω:",
    		pullItem: "π_Update metadata with key properties of your item________________Ω.",
    		importWarning: "π_The selected file did not match a supported format________________Ω.",
    		loading: "π_Loading____Ω...",
    		noMetadata: "π_Metadata can be created for this item by choosing one of the following options_________________________Ω.",
    		unrecognizedMetadata: "π_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Ω.",
    		errorLoading: "π_There was an error while loading___________Ω.",
    		warnings: {
    			badFile: "π_The selected file could not be loaded____________Ω.",
    			notAnXml: "π_The selected file is not an XML file____________Ω.",
    			notSupported: "π_This type of file is not supported____________Ω."
    		}
    	},
    	save: {
    		caption: "π_Save__Ω",
    		dialogTitle: "π_Save Metadata_____Ω",
    		working: "π_Saving metadata______Ω...",
    		errorSaving: "π_An error occurred, your metadata was not saved_______________Ω.",
    		saveDialog: {
    			pushCaption: "π_Apply changes to your item_________Ω"
    		}
    	},
    	saveAndClose: {
    		caption: "π_Save & Close_____Ω"
    	},
    	saveDraft: {
    		caption: "π_Draft___Ω",
    		dialogTitle: "π_Save a Local Draft______Ω"
    	},
    	del: {
    		caption: "π_Delete___Ω",
    		dialogTitle: "π_Delete Metadata______Ω",
    		prompt: "π_Are you sure you want to delete this metadata_______________Ω?",
    		working: "π_Deleting metadata_______Ω...",
    		errorDeleting: "π_An error occurred, your metadata was not deleted________________Ω."
    	},
    	transform: {
    		caption: "π_Transform____Ω",
    		dialogTitle: "π_Transform To_____Ω",
    		prompt: "",
    		working: "π_Transforming______Ω...",
    		errorTransforming: "π_An error occurred while transforming your document________________Ω."
    	},
    	errorDialog: {
    		dialogTitle: "π_There was an error______Ω"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "π_Metadata___Ω"
      	}
      }
    },
    
  	calendar: {
  		button: "π_Calendar____Ω...",
  		title: "π_Calendar___Ω"
  	},
    
  	geoExtent: {
  		button: "π_Set Geographic Extent________Ω...",
  		title: "π_Geographic Extent______Ω",
  		navigate: "π_Navigate___Ω",
  		draw: "π_Draw a Rectangle______Ω",
  		drawHint: "π_Press down to start and let go to finish_____________Ω."
  	},
  	
    hints: {
    	date: "π_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ω",
    	dateTime: "π_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Ω",
    	dateOrDateTime: "π_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Ω",
    	delimitedTextArea: "π_(use comma or newline to separate)___________Ω",
    	fgdcDate: "π_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ω",
    	fgdcTime: "π_(hh:mm:ss.sss[+-]hh:mm)________Ω",
    	integer: "π_(enter an integer)______Ω",
    	latitude: "π_(decimal degrees)______Ω",
    	longitude: "π_(decimal degrees)______Ω",
    	number: "π_(enter a number)______Ω",
    	numberGreaterThanZero: "π_(enter a number > 0)_______Ω"
    },
    
    isoTopicCategoryCode: {
    	caption: "π_Topic Category_____Ω",
    	boundaries: "π_Administrative and Political Boundaries_____________Ω",
    	farming: "π_Agriculture and Farming________Ω",
    	climatologyMeteorologyAtmosphere: "π_Atmosphere and Climatic________Ω",
    	biota: "π_Biology and Ecology_______Ω",
    	economy: "π_Business and Economic_______Ω",
    	planningCadastre: "π_Cadastral____Ω",
    	society: "π_Cultural, Society and Demography___________Ω",
    	elevation: "π_Elevation and Derived Products__________Ω",
    	environment: "π_Environment and Conservation_________Ω",
    	structure: "π_Facilities and Structures_________Ω",
    	geoscientificInformation: "π_Geological and Geophysical_________Ω",
    	health: "π_Human Health and Disease________Ω",
    	imageryBaseMapsEarthCover: "π_Imagery and Base Maps_______Ω",
    	inlandWaters: "π_Inland Water Resources________Ω",
    	location: "π_Locations and Geodetic Networks__________Ω",
    	intelligenceMilitary: "π_Military___Ω",
    	oceans: "π_Oceans and Estuaries_______Ω",
    	transportation: "π_Transportation Networks________Ω",
    	utilitiesCommunication: "π_Utilities and Communication_________Ω"
    },
    
    multiplicity: {
    	moveElementDown: "π_Move Section Down______Ω",
    	moveElementUp: "π_Move Section Up______Ω",
    	removeElement: "π_Remove Section_____Ω",
    	repeatElement: "π_Repeat Section_____Ω"
    },
    
    serviceTypes: {
  		featureService: "π_Feature Service______Ω",
  		mapService: "π_Map Service____Ω",
  		imageService: "π_Image Service_____Ω",
  		wms: "π_WMS__Ω",
  		wfs: "π_WFS__Ω",
  		wcs: "π_WCS__Ω"
    },
    
    validation: {
    	pattern: "π_{label} - {message}_______Ω",
    	patternWithHint: "π_{label} - {message} {hint}_________Ω",
	    ok: "π_OK__Ω",
	    empty: "π_A value is required_______Ω.",
	    date: "π_The value must be a date_________Ω.",
	    integer: "π_The value must be an integer__________Ω.",
	    number: "π_The value must be an number_________Ω.",
	    other: "π_Invalid value_____Ω."
    },
    
    validationPane: {
    	clearMessages: "π_Clear Messages_____Ω"
    }
    
  })
);
