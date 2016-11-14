define(
   ({
  	
    general: {
      cancel: "Peruuta",
      close: "Sulje",
    	none: "Å_None__ö",
    	ok: "Å_OK__ö",
    	other: "Å_Other___ö",
    	stamp: "Å_Stamp___ö"
    },
    
    editor: {
      noMetadata: "Kohteelle ei ole metatietoja.",
    	xmlViewOnly: "Å_This type of metadata can only be viewed as an XML________________ö.",
    	editorDialog: {
    		caption: "Å_Metadata___ö",
    		captionPattern: "Å_Metadata for {title}_______ö"
    	},
    	primaryToolbar: {
    		view: "Å_View__ö",
    		viewXml: "Å_View XML___ö",
    		edit: "Å_Edit__ö",
    		initializing: "Å_Loading____ö...",
    		startingEditor: "Å_Starting editor______ö...",
    		loadingDocument: "Å_Loading document_______ö...",
    		updatingDocument: "Å_Updating document_______ö...",
    		generatingView: "Å_Generating view______ö...",
    		errors: {
    			errorGeneratingView: "Å_An error occurred while generating the view______________ö.",
    			errorLoadingDocument: "Å_An error occurred while loading the document_______________ö."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Å_Your document has changes that have not been saved________________ö.",
    		dialogTitle: "Å_Close Metadata Editor_______ö",
    		closeButton: "Å_Discard & Close______ö"
    	},
    	download: {
    		caption: "Å_Download___ö",
    		dialogTitle: "Å_Download___ö",
    		prompt: "Å_Click here to download your file___________ö."
    	},
    	load: {
    		caption: "Å_Load__ö",
    		dialogTitle: "Å_Load Metadata_____ö",
    		typeTab: "Å_A Type___ö",
    		fileTab: "Å_A File___ö",
    		templateTab: "Å_A Template____ö",
    		itemTab: "Å_Your Item____ö",
    		filePrompt: "Å_Select a local XML file________ö:",
    		templatePrompt: "Å_Select a local XML file (key properties will be updated)__________________ö:",
    		pullItem: "Å_Update metadata with key properties of your item________________ö.",
    		importWarning: "Å_The selected file did not match a supported format________________ö.",
    		loading: "Å_Loading____ö...",
    		noMetadata: "Å_Metadata can be created for this item by choosing one of the following options_________________________ö.",
    		unrecognizedMetadata: "Å_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ö.",
    		errorLoading: "Å_There was an error while loading___________ö.",
    		warnings: {
    			badFile: "Å_The selected file could not be loaded____________ö.",
    			notAnXml: "Å_The selected file is not an XML file____________ö.",
    			notSupported: "Å_This type of file is not supported____________ö."
    		}
    	},
    	save: {
    		caption: "Å_Save__ö",
    		dialogTitle: "Å_Save Metadata_____ö",
    		working: "Å_Saving metadata______ö...",
    		errorSaving: "Å_An error occurred, your metadata was not saved_______________ö.",
    		saveDialog: {
    			pushCaption: "Å_Apply changes to your item_________ö"
    		}
    	},
    	saveAndClose: {
    		caption: "Å_Save & Close_____ö"
    	},
    	saveDraft: {
    		caption: "Å_Draft___ö",
    		dialogTitle: "Å_Save a Local Draft______ö"
    	},
    	del: {
    		caption: "Å_Delete___ö",
    		dialogTitle: "Å_Delete Metadata______ö",
    		prompt: "Å_Are you sure you want to delete this metadata_______________ö?",
    		working: "Å_Deleting metadata_______ö...",
    		errorDeleting: "Å_An error occurred, your metadata was not deleted________________ö."
    	},
    	transform: {
    		caption: "Å_Transform____ö",
    		dialogTitle: "Å_Transform To_____ö",
    		prompt: "",
    		working: "Å_Transforming______ö...",
    		errorTransforming: "Å_An error occurred while transforming your document________________ö."
    	},
    	errorDialog: {
    		dialogTitle: "Å_There was an error______ö"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Å_Metadata___ö"
      	}
      }
    },
    
  	calendar: {
  		button: "Å_Calendar____ö...",
  		title: "Å_Calendar___ö"
  	},
    
  	geoExtent: {
  		button: "Å_Set Geographic Extent________ö...",
  		title: "Å_Geographic Extent______ö",
  		navigate: "Å_Navigate___ö",
  		draw: "Å_Draw a Rectangle______ö",
  		drawHint: "Å_Press down to start and let go to finish_____________ö."
  	},
  	
    hints: {
    	date: "Å_(yyyy or yyyy-mm or yyyy-mm-dd)__________ö",
    	dateTime: "Å_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ö",
    	dateOrDateTime: "Å_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ö",
    	delimitedTextArea: "Å_(use comma or newline to separate)___________ö",
    	fgdcDate: "Å_(yyyy or yyyy-mm or yyyy-mm-dd)__________ö",
    	fgdcTime: "Å_(hh:mm:ss.sss[+-]hh:mm)________ö",
    	integer: "Å_(enter an integer)______ö",
    	latitude: "Å_(decimal degrees)______ö",
    	longitude: "Å_(decimal degrees)______ö",
    	number: "Å_(enter a number)______ö",
    	numberGreaterThanZero: "Å_(enter a number > 0)_______ö"
    },
    
    isoTopicCategoryCode: {
    	caption: "Å_Topic Category_____ö",
    	boundaries: "Å_Administrative and Political Boundaries_____________ö",
    	farming: "Å_Agriculture and Farming________ö",
    	climatologyMeteorologyAtmosphere: "Å_Atmosphere and Climatic________ö",
    	biota: "Å_Biology and Ecology_______ö",
    	economy: "Å_Business and Economic_______ö",
    	planningCadastre: "Å_Cadastral____ö",
    	society: "Å_Cultural, Society and Demography___________ö",
    	elevation: "Å_Elevation and Derived Products__________ö",
    	environment: "Å_Environment and Conservation_________ö",
    	structure: "Å_Facilities and Structures_________ö",
    	geoscientificInformation: "Å_Geological and Geophysical_________ö",
    	health: "Å_Human Health and Disease________ö",
    	imageryBaseMapsEarthCover: "Å_Imagery and Base Maps_______ö",
    	inlandWaters: "Å_Inland Water Resources________ö",
    	location: "Å_Locations and Geodetic Networks__________ö",
    	intelligenceMilitary: "Å_Military___ö",
    	oceans: "Å_Oceans and Estuaries_______ö",
    	transportation: "Å_Transportation Networks________ö",
    	utilitiesCommunication: "Å_Utilities and Communication_________ö"
    },
    
    multiplicity: {
    	moveElementDown: "Å_Move Section Down______ö",
    	moveElementUp: "Å_Move Section Up______ö",
    	removeElement: "Å_Remove Section_____ö",
    	repeatElement: "Å_Repeat Section_____ö"
    },
    
    serviceTypes: {
  		featureService: "Å_Feature Service______ö",
  		mapService: "Å_Map Service____ö",
  		imageService: "Å_Image Service_____ö",
  		wms: "Å_WMS__ö",
  		wfs: "Å_WFS__ö",
  		wcs: "Å_WCS__ö"
    },
    
    validation: {
    	pattern: "Å_{label} - {message}_______ö",
    	patternWithHint: "Å_{label} - {message} {hint}_________ö",
	    ok: "Å_OK__ö",
	    empty: "Å_A value is required_______ö.",
	    date: "Å_The value must be a date_________ö.",
	    integer: "Å_The value must be an integer__________ö.",
	    number: "Å_The value must be an number_________ö.",
	    other: "Å_Invalid value_____ö."
    },
    
    validationPane: {
    	clearMessages: "Å_Clear Messages_____ö"
    }
    
  })
);
