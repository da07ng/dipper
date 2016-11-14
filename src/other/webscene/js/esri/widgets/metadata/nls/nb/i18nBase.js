define(
   ({
  	
    general: {
      cancel: "Avbryt",
      close: "Lukk",
    	none: "å_None__ø",
    	ok: "å_OK__ø",
    	other: "å_Other___ø",
    	stamp: "å_Stamp___ø"
    },
    
    editor: {
      noMetadata: "Det er ingen metadata for dette elementet.",
    	xmlViewOnly: "å_This type of metadata can only be viewed as an XML________________ø.",
    	editorDialog: {
    		caption: "å_Metadata___ø",
    		captionPattern: "å_Metadata for {title}_______ø"
    	},
    	primaryToolbar: {
    		view: "å_View__ø",
    		viewXml: "å_View XML___ø",
    		edit: "å_Edit__ø",
    		initializing: "å_Loading____ø...",
    		startingEditor: "å_Starting editor______ø...",
    		loadingDocument: "å_Loading document_______ø...",
    		updatingDocument: "å_Updating document_______ø...",
    		generatingView: "å_Generating view______ø...",
    		errors: {
    			errorGeneratingView: "å_An error occurred while generating the view______________ø.",
    			errorLoadingDocument: "å_An error occurred while loading the document_______________ø."
    		}
    	},
    	changesNotSaved: {
    		prompt: "å_Your document has changes that have not been saved________________ø.",
    		dialogTitle: "å_Close Metadata Editor_______ø",
    		closeButton: "å_Discard & Close______ø"
    	},
    	download: {
    		caption: "å_Download___ø",
    		dialogTitle: "å_Download___ø",
    		prompt: "å_Click here to download your file___________ø."
    	},
    	load: {
    		caption: "å_Load__ø",
    		dialogTitle: "å_Load Metadata_____ø",
    		typeTab: "å_A Type___ø",
    		fileTab: "å_A File___ø",
    		templateTab: "å_A Template____ø",
    		itemTab: "å_Your Item____ø",
    		filePrompt: "å_Select a local XML file________ø:",
    		templatePrompt: "å_Select a local XML file (key properties will be updated)__________________ø:",
    		pullItem: "å_Update metadata with key properties of your item________________ø.",
    		importWarning: "å_The selected file did not match a supported format________________ø.",
    		loading: "å_Loading____ø...",
    		noMetadata: "å_Metadata can be created for this item by choosing one of the following options_________________________ø.",
    		unrecognizedMetadata: "å_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ø.",
    		errorLoading: "å_There was an error while loading___________ø.",
    		warnings: {
    			badFile: "å_The selected file could not be loaded____________ø.",
    			notAnXml: "å_The selected file is not an XML file____________ø.",
    			notSupported: "å_This type of file is not supported____________ø."
    		}
    	},
    	save: {
    		caption: "å_Save__ø",
    		dialogTitle: "å_Save Metadata_____ø",
    		working: "å_Saving metadata______ø...",
    		errorSaving: "å_An error occurred, your metadata was not saved_______________ø.",
    		saveDialog: {
    			pushCaption: "å_Apply changes to your item_________ø"
    		}
    	},
    	saveAndClose: {
    		caption: "å_Save & Close_____ø"
    	},
    	saveDraft: {
    		caption: "å_Draft___ø",
    		dialogTitle: "å_Save a Local Draft______ø"
    	},
    	del: {
    		caption: "å_Delete___ø",
    		dialogTitle: "å_Delete Metadata______ø",
    		prompt: "å_Are you sure you want to delete this metadata_______________ø?",
    		working: "å_Deleting metadata_______ø...",
    		errorDeleting: "å_An error occurred, your metadata was not deleted________________ø."
    	},
    	transform: {
    		caption: "å_Transform____ø",
    		dialogTitle: "å_Transform To_____ø",
    		prompt: "",
    		working: "å_Transforming______ø...",
    		errorTransforming: "å_An error occurred while transforming your document________________ø."
    	},
    	errorDialog: {
    		dialogTitle: "å_There was an error______ø"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "å_Metadata___ø"
      	}
      }
    },
    
  	calendar: {
  		button: "å_Calendar____ø...",
  		title: "å_Calendar___ø"
  	},
    
  	geoExtent: {
  		button: "å_Set Geographic Extent________ø...",
  		title: "å_Geographic Extent______ø",
  		navigate: "å_Navigate___ø",
  		draw: "å_Draw a Rectangle______ø",
  		drawHint: "å_Press down to start and let go to finish_____________ø."
  	},
  	
    hints: {
    	date: "å_(yyyy or yyyy-mm or yyyy-mm-dd)__________ø",
    	dateTime: "å_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ø",
    	dateOrDateTime: "å_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ø",
    	delimitedTextArea: "å_(use comma or newline to separate)___________ø",
    	fgdcDate: "å_(yyyy or yyyy-mm or yyyy-mm-dd)__________ø",
    	fgdcTime: "å_(hh:mm:ss.sss[+-]hh:mm)________ø",
    	integer: "å_(enter an integer)______ø",
    	latitude: "å_(decimal degrees)______ø",
    	longitude: "å_(decimal degrees)______ø",
    	number: "å_(enter a number)______ø",
    	numberGreaterThanZero: "å_(enter a number > 0)_______ø"
    },
    
    isoTopicCategoryCode: {
    	caption: "å_Topic Category_____ø",
    	boundaries: "å_Administrative and Political Boundaries_____________ø",
    	farming: "å_Agriculture and Farming________ø",
    	climatologyMeteorologyAtmosphere: "å_Atmosphere and Climatic________ø",
    	biota: "å_Biology and Ecology_______ø",
    	economy: "å_Business and Economic_______ø",
    	planningCadastre: "å_Cadastral____ø",
    	society: "å_Cultural, Society and Demography___________ø",
    	elevation: "å_Elevation and Derived Products__________ø",
    	environment: "å_Environment and Conservation_________ø",
    	structure: "å_Facilities and Structures_________ø",
    	geoscientificInformation: "å_Geological and Geophysical_________ø",
    	health: "å_Human Health and Disease________ø",
    	imageryBaseMapsEarthCover: "å_Imagery and Base Maps_______ø",
    	inlandWaters: "å_Inland Water Resources________ø",
    	location: "å_Locations and Geodetic Networks__________ø",
    	intelligenceMilitary: "å_Military___ø",
    	oceans: "å_Oceans and Estuaries_______ø",
    	transportation: "å_Transportation Networks________ø",
    	utilitiesCommunication: "å_Utilities and Communication_________ø"
    },
    
    multiplicity: {
    	moveElementDown: "å_Move Section Down______ø",
    	moveElementUp: "å_Move Section Up______ø",
    	removeElement: "å_Remove Section_____ø",
    	repeatElement: "å_Repeat Section_____ø"
    },
    
    serviceTypes: {
  		featureService: "å_Feature Service______ø",
  		mapService: "å_Map Service____ø",
  		imageService: "å_Image Service_____ø",
  		wms: "å_WMS__ø",
  		wfs: "å_WFS__ø",
  		wcs: "å_WCS__ø"
    },
    
    validation: {
    	pattern: "å_{label} - {message}_______ø",
    	patternWithHint: "å_{label} - {message} {hint}_________ø",
	    ok: "å_OK__ø",
	    empty: "å_A value is required_______ø.",
	    date: "å_The value must be a date_________ø.",
	    integer: "å_The value must be an integer__________ø.",
	    number: "å_The value must be an number_________ø.",
	    other: "å_Invalid value_____ø."
    },
    
    validationPane: {
    	clearMessages: "å_Clear Messages_____ø"
    }
    
  })
);
