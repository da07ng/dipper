define(
   ({
  	
    general: {
      cancel: "Anulare",
      close: "Închidere",
    	none: "Ă_None__ș",
    	ok: "Ă_OK__ș",
    	other: "Ă_Other___ș",
    	stamp: "Ă_Stamp___ș"
    },
    
    editor: {
      noMetadata: "Nu există metadate pentru acest element.",
    	xmlViewOnly: "Ă_This type of metadata can only be viewed as an XML________________ș.",
    	editorDialog: {
    		caption: "Ă_Metadata___ș",
    		captionPattern: "Ă_Metadata for {title}_______ș"
    	},
    	primaryToolbar: {
    		view: "Ă_View__ș",
    		viewXml: "Ă_View XML___ș",
    		edit: "Ă_Edit__ș",
    		initializing: "Ă_Loading____ș...",
    		startingEditor: "Ă_Starting editor______ș...",
    		loadingDocument: "Ă_Loading document_______ș...",
    		updatingDocument: "Ă_Updating document_______ș...",
    		generatingView: "Ă_Generating view______ș...",
    		errors: {
    			errorGeneratingView: "Ă_An error occurred while generating the view______________ș.",
    			errorLoadingDocument: "Ă_An error occurred while loading the document_______________ș."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Ă_Your document has changes that have not been saved________________ș.",
    		dialogTitle: "Ă_Close Metadata Editor_______ș",
    		closeButton: "Ă_Discard & Close______ș"
    	},
    	download: {
    		caption: "Ă_Download___ș",
    		dialogTitle: "Ă_Download___ș",
    		prompt: "Ă_Click here to download your file___________ș."
    	},
    	load: {
    		caption: "Ă_Load__ș",
    		dialogTitle: "Ă_Load Metadata_____ș",
    		typeTab: "Ă_A Type___ș",
    		fileTab: "Ă_A File___ș",
    		templateTab: "Ă_A Template____ș",
    		itemTab: "Ă_Your Item____ș",
    		filePrompt: "Ă_Select a local XML file________ș:",
    		templatePrompt: "Ă_Select a local XML file (key properties will be updated)__________________ș:",
    		pullItem: "Ă_Update metadata with key properties of your item________________ș.",
    		importWarning: "Ă_The selected file did not match a supported format________________ș.",
    		loading: "Ă_Loading____ș...",
    		noMetadata: "Ă_Metadata can be created for this item by choosing one of the following options_________________________ș.",
    		unrecognizedMetadata: "Ă_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ș.",
    		errorLoading: "Ă_There was an error while loading___________ș.",
    		warnings: {
    			badFile: "Ă_The selected file could not be loaded____________ș.",
    			notAnXml: "Ă_The selected file is not an XML file____________ș.",
    			notSupported: "Ă_This type of file is not supported____________ș."
    		}
    	},
    	save: {
    		caption: "Ă_Save__ș",
    		dialogTitle: "Ă_Save Metadata_____ș",
    		working: "Ă_Saving metadata______ș...",
    		errorSaving: "Ă_An error occurred, your metadata was not saved_______________ș.",
    		saveDialog: {
    			pushCaption: "Ă_Apply changes to your item_________ș"
    		}
    	},
    	saveAndClose: {
    		caption: "Ă_Save & Close_____ș"
    	},
    	saveDraft: {
    		caption: "Ă_Draft___ș",
    		dialogTitle: "Ă_Save a Local Draft______ș"
    	},
    	del: {
    		caption: "Ă_Delete___ș",
    		dialogTitle: "Ă_Delete Metadata______ș",
    		prompt: "Ă_Are you sure you want to delete this metadata_______________ș?",
    		working: "Ă_Deleting metadata_______ș...",
    		errorDeleting: "Ă_An error occurred, your metadata was not deleted________________ș."
    	},
    	transform: {
    		caption: "Ă_Transform____ș",
    		dialogTitle: "Ă_Transform To_____ș",
    		prompt: "",
    		working: "Ă_Transforming______ș...",
    		errorTransforming: "Ă_An error occurred while transforming your document________________ș."
    	},
    	errorDialog: {
    		dialogTitle: "Ă_There was an error______ș"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Ă_Metadata___ș"
      	}
      }
    },
    
  	calendar: {
  		button: "Ă_Calendar____ș...",
  		title: "Ă_Calendar___ș"
  	},
    
  	geoExtent: {
  		button: "Ă_Set Geographic Extent________ș...",
  		title: "Ă_Geographic Extent______ș",
  		navigate: "Ă_Navigate___ș",
  		draw: "Ă_Draw a Rectangle______ș",
  		drawHint: "Ă_Press down to start and let go to finish_____________ș."
  	},
  	
    hints: {
    	date: "Ă_(yyyy or yyyy-mm or yyyy-mm-dd)__________ș",
    	dateTime: "Ă_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ș",
    	dateOrDateTime: "Ă_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ș",
    	delimitedTextArea: "Ă_(use comma or newline to separate)___________ș",
    	fgdcDate: "Ă_(yyyy or yyyy-mm or yyyy-mm-dd)__________ș",
    	fgdcTime: "Ă_(hh:mm:ss.sss[+-]hh:mm)________ș",
    	integer: "Ă_(enter an integer)______ș",
    	latitude: "Ă_(decimal degrees)______ș",
    	longitude: "Ă_(decimal degrees)______ș",
    	number: "Ă_(enter a number)______ș",
    	numberGreaterThanZero: "Ă_(enter a number > 0)_______ș"
    },
    
    isoTopicCategoryCode: {
    	caption: "Ă_Topic Category_____ș",
    	boundaries: "Ă_Administrative and Political Boundaries_____________ș",
    	farming: "Ă_Agriculture and Farming________ș",
    	climatologyMeteorologyAtmosphere: "Ă_Atmosphere and Climatic________ș",
    	biota: "Ă_Biology and Ecology_______ș",
    	economy: "Ă_Business and Economic_______ș",
    	planningCadastre: "Ă_Cadastral____ș",
    	society: "Ă_Cultural, Society and Demography___________ș",
    	elevation: "Ă_Elevation and Derived Products__________ș",
    	environment: "Ă_Environment and Conservation_________ș",
    	structure: "Ă_Facilities and Structures_________ș",
    	geoscientificInformation: "Ă_Geological and Geophysical_________ș",
    	health: "Ă_Human Health and Disease________ș",
    	imageryBaseMapsEarthCover: "Ă_Imagery and Base Maps_______ș",
    	inlandWaters: "Ă_Inland Water Resources________ș",
    	location: "Ă_Locations and Geodetic Networks__________ș",
    	intelligenceMilitary: "Ă_Military___ș",
    	oceans: "Ă_Oceans and Estuaries_______ș",
    	transportation: "Ă_Transportation Networks________ș",
    	utilitiesCommunication: "Ă_Utilities and Communication_________ș"
    },
    
    multiplicity: {
    	moveElementDown: "Ă_Move Section Down______ș",
    	moveElementUp: "Ă_Move Section Up______ș",
    	removeElement: "Ă_Remove Section_____ș",
    	repeatElement: "Ă_Repeat Section_____ș"
    },
    
    serviceTypes: {
  		featureService: "Ă_Feature Service______ș",
  		mapService: "Ă_Map Service____ș",
  		imageService: "Ă_Image Service_____ș",
  		wms: "Ă_WMS__ș",
  		wfs: "Ă_WFS__ș",
  		wcs: "Ă_WCS__ș"
    },
    
    validation: {
    	pattern: "Ă_{label} - {message}_______ș",
    	patternWithHint: "Ă_{label} - {message} {hint}_________ș",
	    ok: "Ă_OK__ș",
	    empty: "Ă_A value is required_______ș.",
	    date: "Ă_The value must be a date_________ș.",
	    integer: "Ă_The value must be an integer__________ș.",
	    number: "Ă_The value must be an number_________ș.",
	    other: "Ă_Invalid value_____ș."
    },
    
    validationPane: {
    	clearMessages: "Ă_Clear Messages_____ș"
    }
    
  })
);
