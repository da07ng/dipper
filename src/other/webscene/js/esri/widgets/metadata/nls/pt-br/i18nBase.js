define(
   ({
  	
    general: {
      cancel: "Cancelar",
      close: "Fechar",
    	none: "ã_None__Ç",
    	ok: "ã_OK__Ç",
    	other: "ã_Other___Ç",
    	stamp: "ã_Stamp___Ç"
    },
    
    editor: {
      noMetadata: "Não há metadados para este item.",
    	xmlViewOnly: "ã_This type of metadata can only be viewed as an XML________________Ç.",
    	editorDialog: {
    		caption: "ã_Metadata___Ç",
    		captionPattern: "ã_Metadata for {title}_______Ç"
    	},
    	primaryToolbar: {
    		view: "ã_View__Ç",
    		viewXml: "ã_View XML___Ç",
    		edit: "ã_Edit__Ç",
    		initializing: "ã_Loading____Ç...",
    		startingEditor: "ã_Starting editor______Ç...",
    		loadingDocument: "ã_Loading document_______Ç...",
    		updatingDocument: "ã_Updating document_______Ç...",
    		generatingView: "ã_Generating view______Ç...",
    		errors: {
    			errorGeneratingView: "ã_An error occurred while generating the view______________Ç.",
    			errorLoadingDocument: "ã_An error occurred while loading the document_______________Ç."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ã_Your document has changes that have not been saved________________Ç.",
    		dialogTitle: "ã_Close Metadata Editor_______Ç",
    		closeButton: "ã_Discard & Close______Ç"
    	},
    	download: {
    		caption: "ã_Download___Ç",
    		dialogTitle: "ã_Download___Ç",
    		prompt: "ã_Click here to download your file___________Ç."
    	},
    	load: {
    		caption: "ã_Load__Ç",
    		dialogTitle: "ã_Load Metadata_____Ç",
    		typeTab: "ã_A Type___Ç",
    		fileTab: "ã_A File___Ç",
    		templateTab: "ã_A Template____Ç",
    		itemTab: "ã_Your Item____Ç",
    		filePrompt: "ã_Select a local XML file________Ç:",
    		templatePrompt: "ã_Select a local XML file (key properties will be updated)__________________Ç:",
    		pullItem: "ã_Update metadata with key properties of your item________________Ç.",
    		importWarning: "ã_The selected file did not match a supported format________________Ç.",
    		loading: "ã_Loading____Ç...",
    		noMetadata: "ã_Metadata can be created for this item by choosing one of the following options_________________________Ç.",
    		unrecognizedMetadata: "ã_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Ç.",
    		errorLoading: "ã_There was an error while loading___________Ç.",
    		warnings: {
    			badFile: "ã_The selected file could not be loaded____________Ç.",
    			notAnXml: "ã_The selected file is not an XML file____________Ç.",
    			notSupported: "ã_This type of file is not supported____________Ç."
    		}
    	},
    	save: {
    		caption: "ã_Save__Ç",
    		dialogTitle: "ã_Save Metadata_____Ç",
    		working: "ã_Saving metadata______Ç...",
    		errorSaving: "ã_An error occurred, your metadata was not saved_______________Ç.",
    		saveDialog: {
    			pushCaption: "ã_Apply changes to your item_________Ç"
    		}
    	},
    	saveAndClose: {
    		caption: "ã_Save & Close_____Ç"
    	},
    	saveDraft: {
    		caption: "ã_Draft___Ç",
    		dialogTitle: "ã_Save a Local Draft______Ç"
    	},
    	del: {
    		caption: "ã_Delete___Ç",
    		dialogTitle: "ã_Delete Metadata______Ç",
    		prompt: "ã_Are you sure you want to delete this metadata_______________Ç?",
    		working: "ã_Deleting metadata_______Ç...",
    		errorDeleting: "ã_An error occurred, your metadata was not deleted________________Ç."
    	},
    	transform: {
    		caption: "ã_Transform____Ç",
    		dialogTitle: "ã_Transform To_____Ç",
    		prompt: "",
    		working: "ã_Transforming______Ç...",
    		errorTransforming: "ã_An error occurred while transforming your document________________Ç."
    	},
    	errorDialog: {
    		dialogTitle: "ã_There was an error______Ç"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ã_Metadata___Ç"
      	}
      }
    },
    
  	calendar: {
  		button: "ã_Calendar____Ç...",
  		title: "ã_Calendar___Ç"
  	},
    
  	geoExtent: {
  		button: "ã_Set Geographic Extent________Ç...",
  		title: "ã_Geographic Extent______Ç",
  		navigate: "ã_Navigate___Ç",
  		draw: "ã_Draw a Rectangle______Ç",
  		drawHint: "ã_Press down to start and let go to finish_____________Ç."
  	},
  	
    hints: {
    	date: "ã_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ç",
    	dateTime: "ã_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Ç",
    	dateOrDateTime: "ã_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Ç",
    	delimitedTextArea: "ã_(use comma or newline to separate)___________Ç",
    	fgdcDate: "ã_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ç",
    	fgdcTime: "ã_(hh:mm:ss.sss[+-]hh:mm)________Ç",
    	integer: "ã_(enter an integer)______Ç",
    	latitude: "ã_(decimal degrees)______Ç",
    	longitude: "ã_(decimal degrees)______Ç",
    	number: "ã_(enter a number)______Ç",
    	numberGreaterThanZero: "ã_(enter a number > 0)_______Ç"
    },
    
    isoTopicCategoryCode: {
    	caption: "ã_Topic Category_____Ç",
    	boundaries: "ã_Administrative and Political Boundaries_____________Ç",
    	farming: "ã_Agriculture and Farming________Ç",
    	climatologyMeteorologyAtmosphere: "ã_Atmosphere and Climatic________Ç",
    	biota: "ã_Biology and Ecology_______Ç",
    	economy: "ã_Business and Economic_______Ç",
    	planningCadastre: "ã_Cadastral____Ç",
    	society: "ã_Cultural, Society and Demography___________Ç",
    	elevation: "ã_Elevation and Derived Products__________Ç",
    	environment: "ã_Environment and Conservation_________Ç",
    	structure: "ã_Facilities and Structures_________Ç",
    	geoscientificInformation: "ã_Geological and Geophysical_________Ç",
    	health: "ã_Human Health and Disease________Ç",
    	imageryBaseMapsEarthCover: "ã_Imagery and Base Maps_______Ç",
    	inlandWaters: "ã_Inland Water Resources________Ç",
    	location: "ã_Locations and Geodetic Networks__________Ç",
    	intelligenceMilitary: "ã_Military___Ç",
    	oceans: "ã_Oceans and Estuaries_______Ç",
    	transportation: "ã_Transportation Networks________Ç",
    	utilitiesCommunication: "ã_Utilities and Communication_________Ç"
    },
    
    multiplicity: {
    	moveElementDown: "ã_Move Section Down______Ç",
    	moveElementUp: "ã_Move Section Up______Ç",
    	removeElement: "ã_Remove Section_____Ç",
    	repeatElement: "ã_Repeat Section_____Ç"
    },
    
    serviceTypes: {
  		featureService: "ã_Feature Service______Ç",
  		mapService: "ã_Map Service____Ç",
  		imageService: "ã_Image Service_____Ç",
  		wms: "ã_WMS__Ç",
  		wfs: "ã_WFS__Ç",
  		wcs: "ã_WCS__Ç"
    },
    
    validation: {
    	pattern: "ã_{label} - {message}_______Ç",
    	patternWithHint: "ã_{label} - {message} {hint}_________Ç",
	    ok: "ã_OK__Ç",
	    empty: "ã_A value is required_______Ç.",
	    date: "ã_The value must be a date_________Ç.",
	    integer: "ã_The value must be an integer__________Ç.",
	    number: "ã_The value must be an number_________Ç.",
	    other: "ã_Invalid value_____Ç."
    },
    
    validationPane: {
    	clearMessages: "ã_Clear Messages_____Ç"
    }
    
  })
);
