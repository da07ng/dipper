define(
   ({
  	
    general: {
      cancel: "Cancelar",
      close: "Cerrar",
    	none: "á_None__Ó",
    	ok: "á_OK__Ó",
    	other: "á_Other___Ó",
    	stamp: "á_Stamp___Ó"
    },
    
    editor: {
      noMetadata: "No hay metadatos para este elemento.",
    	xmlViewOnly: "á_This type of metadata can only be viewed as an XML________________Ó.",
    	editorDialog: {
    		caption: "á_Metadata___Ó",
    		captionPattern: "á_Metadata for {title}_______Ó"
    	},
    	primaryToolbar: {
    		view: "á_View__Ó",
    		viewXml: "á_View XML___Ó",
    		edit: "á_Edit__Ó",
    		initializing: "á_Loading____Ó...",
    		startingEditor: "á_Starting editor______Ó...",
    		loadingDocument: "á_Loading document_______Ó...",
    		updatingDocument: "á_Updating document_______Ó...",
    		generatingView: "á_Generating view______Ó...",
    		errors: {
    			errorGeneratingView: "á_An error occurred while generating the view______________Ó.",
    			errorLoadingDocument: "á_An error occurred while loading the document_______________Ó."
    		}
    	},
    	changesNotSaved: {
    		prompt: "á_Your document has changes that have not been saved________________Ó.",
    		dialogTitle: "á_Close Metadata Editor_______Ó",
    		closeButton: "á_Discard & Close______Ó"
    	},
    	download: {
    		caption: "á_Download___Ó",
    		dialogTitle: "á_Download___Ó",
    		prompt: "á_Click here to download your file___________Ó."
    	},
    	load: {
    		caption: "á_Load__Ó",
    		dialogTitle: "á_Load Metadata_____Ó",
    		typeTab: "á_A Type___Ó",
    		fileTab: "á_A File___Ó",
    		templateTab: "á_A Template____Ó",
    		itemTab: "á_Your Item____Ó",
    		filePrompt: "á_Select a local XML file________Ó:",
    		templatePrompt: "á_Select a local XML file (key properties will be updated)__________________Ó:",
    		pullItem: "á_Update metadata with key properties of your item________________Ó.",
    		importWarning: "á_The selected file did not match a supported format________________Ó.",
    		loading: "á_Loading____Ó...",
    		noMetadata: "á_Metadata can be created for this item by choosing one of the following options_________________________Ó.",
    		unrecognizedMetadata: "á_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________Ó.",
    		errorLoading: "á_There was an error while loading___________Ó.",
    		warnings: {
    			badFile: "á_The selected file could not be loaded____________Ó.",
    			notAnXml: "á_The selected file is not an XML file____________Ó.",
    			notSupported: "á_This type of file is not supported____________Ó."
    		}
    	},
    	save: {
    		caption: "á_Save__Ó",
    		dialogTitle: "á_Save Metadata_____Ó",
    		working: "á_Saving metadata______Ó...",
    		errorSaving: "á_An error occurred, your metadata was not saved_______________Ó.",
    		saveDialog: {
    			pushCaption: "á_Apply changes to your item_________Ó"
    		}
    	},
    	saveAndClose: {
    		caption: "á_Save & Close_____Ó"
    	},
    	saveDraft: {
    		caption: "á_Draft___Ó",
    		dialogTitle: "á_Save a Local Draft______Ó"
    	},
    	del: {
    		caption: "á_Delete___Ó",
    		dialogTitle: "á_Delete Metadata______Ó",
    		prompt: "á_Are you sure you want to delete this metadata_______________Ó?",
    		working: "á_Deleting metadata_______Ó...",
    		errorDeleting: "á_An error occurred, your metadata was not deleted________________Ó."
    	},
    	transform: {
    		caption: "á_Transform____Ó",
    		dialogTitle: "á_Transform To_____Ó",
    		prompt: "",
    		working: "á_Transforming______Ó...",
    		errorTransforming: "á_An error occurred while transforming your document________________Ó."
    	},
    	errorDialog: {
    		dialogTitle: "á_There was an error______Ó"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "á_Metadata___Ó"
      	}
      }
    },
    
  	calendar: {
  		button: "á_Calendar____Ó...",
  		title: "á_Calendar___Ó"
  	},
    
  	geoExtent: {
  		button: "á_Set Geographic Extent________Ó...",
  		title: "á_Geographic Extent______Ó",
  		navigate: "á_Navigate___Ó",
  		draw: "á_Draw a Rectangle______Ó",
  		drawHint: "á_Press down to start and let go to finish_____________Ó."
  	},
  	
    hints: {
    	date: "á_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ó",
    	dateTime: "á_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________Ó",
    	dateOrDateTime: "á_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________Ó",
    	delimitedTextArea: "á_(use comma or newline to separate)___________Ó",
    	fgdcDate: "á_(yyyy or yyyy-mm or yyyy-mm-dd)__________Ó",
    	fgdcTime: "á_(hh:mm:ss.sss[+-]hh:mm)________Ó",
    	integer: "á_(enter an integer)______Ó",
    	latitude: "á_(decimal degrees)______Ó",
    	longitude: "á_(decimal degrees)______Ó",
    	number: "á_(enter a number)______Ó",
    	numberGreaterThanZero: "á_(enter a number > 0)_______Ó"
    },
    
    isoTopicCategoryCode: {
    	caption: "á_Topic Category_____Ó",
    	boundaries: "á_Administrative and Political Boundaries_____________Ó",
    	farming: "á_Agriculture and Farming________Ó",
    	climatologyMeteorologyAtmosphere: "á_Atmosphere and Climatic________Ó",
    	biota: "á_Biology and Ecology_______Ó",
    	economy: "á_Business and Economic_______Ó",
    	planningCadastre: "á_Cadastral____Ó",
    	society: "á_Cultural, Society and Demography___________Ó",
    	elevation: "á_Elevation and Derived Products__________Ó",
    	environment: "á_Environment and Conservation_________Ó",
    	structure: "á_Facilities and Structures_________Ó",
    	geoscientificInformation: "á_Geological and Geophysical_________Ó",
    	health: "á_Human Health and Disease________Ó",
    	imageryBaseMapsEarthCover: "á_Imagery and Base Maps_______Ó",
    	inlandWaters: "á_Inland Water Resources________Ó",
    	location: "á_Locations and Geodetic Networks__________Ó",
    	intelligenceMilitary: "á_Military___Ó",
    	oceans: "á_Oceans and Estuaries_______Ó",
    	transportation: "á_Transportation Networks________Ó",
    	utilitiesCommunication: "á_Utilities and Communication_________Ó"
    },
    
    multiplicity: {
    	moveElementDown: "á_Move Section Down______Ó",
    	moveElementUp: "á_Move Section Up______Ó",
    	removeElement: "á_Remove Section_____Ó",
    	repeatElement: "á_Repeat Section_____Ó"
    },
    
    serviceTypes: {
  		featureService: "á_Feature Service______Ó",
  		mapService: "á_Map Service____Ó",
  		imageService: "á_Image Service_____Ó",
  		wms: "á_WMS__Ó",
  		wfs: "á_WFS__Ó",
  		wcs: "á_WCS__Ó"
    },
    
    validation: {
    	pattern: "á_{label} - {message}_______Ó",
    	patternWithHint: "á_{label} - {message} {hint}_________Ó",
	    ok: "á_OK__Ó",
	    empty: "á_A value is required_______Ó.",
	    date: "á_The value must be a date_________Ó.",
	    integer: "á_The value must be an integer__________Ó.",
	    number: "á_The value must be an number_________Ó.",
	    other: "á_Invalid value_____Ó."
    },
    
    validationPane: {
    	clearMessages: "á_Clear Messages_____Ó"
    }
    
  })
);
