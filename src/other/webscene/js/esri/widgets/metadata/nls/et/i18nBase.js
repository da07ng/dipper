define(
   ({
  	
    general: {
      cancel: "Tühista",
      close: "Sulge",
    	none: "Š_None__ä",
    	ok: "Š_OK__ä",
    	other: "Š_Other___ä",
    	stamp: "Š_Stamp___ä"
    },
    
    editor: {
      noMetadata: "Selle üksuse metaandmed puuduvad.",
    	xmlViewOnly: "Š_This type of metadata can only be viewed as an XML________________ä.",
    	editorDialog: {
    		caption: "Š_Metadata___ä",
    		captionPattern: "Š_Metadata for {title}_______ä"
    	},
    	primaryToolbar: {
    		view: "Š_View__ä",
    		viewXml: "Š_View XML___ä",
    		edit: "Š_Edit__ä",
    		initializing: "Š_Loading____ä...",
    		startingEditor: "Š_Starting editor______ä...",
    		loadingDocument: "Š_Loading document_______ä...",
    		updatingDocument: "Š_Updating document_______ä...",
    		generatingView: "Š_Generating view______ä...",
    		errors: {
    			errorGeneratingView: "Š_An error occurred while generating the view______________ä.",
    			errorLoadingDocument: "Š_An error occurred while loading the document_______________ä."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Š_Your document has changes that have not been saved________________ä.",
    		dialogTitle: "Š_Close Metadata Editor_______ä",
    		closeButton: "Š_Discard & Close______ä"
    	},
    	download: {
    		caption: "Š_Download___ä",
    		dialogTitle: "Š_Download___ä",
    		prompt: "Š_Click here to download your file___________ä."
    	},
    	load: {
    		caption: "Š_Load__ä",
    		dialogTitle: "Š_Load Metadata_____ä",
    		typeTab: "Š_A Type___ä",
    		fileTab: "Š_A File___ä",
    		templateTab: "Š_A Template____ä",
    		itemTab: "Š_Your Item____ä",
    		filePrompt: "Š_Select a local XML file________ä:",
    		templatePrompt: "Š_Select a local XML file (key properties will be updated)__________________ä:",
    		pullItem: "Š_Update metadata with key properties of your item________________ä.",
    		importWarning: "Š_The selected file did not match a supported format________________ä.",
    		loading: "Š_Loading____ä...",
    		noMetadata: "Š_Metadata can be created for this item by choosing one of the following options_________________________ä.",
    		unrecognizedMetadata: "Š_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ä.",
    		errorLoading: "Š_There was an error while loading___________ä.",
    		warnings: {
    			badFile: "Š_The selected file could not be loaded____________ä.",
    			notAnXml: "Š_The selected file is not an XML file____________ä.",
    			notSupported: "Š_This type of file is not supported____________ä."
    		}
    	},
    	save: {
    		caption: "Š_Save__ä",
    		dialogTitle: "Š_Save Metadata_____ä",
    		working: "Š_Saving metadata______ä...",
    		errorSaving: "Š_An error occurred, your metadata was not saved_______________ä.",
    		saveDialog: {
    			pushCaption: "Š_Apply changes to your item_________ä"
    		}
    	},
    	saveAndClose: {
    		caption: "Š_Save & Close_____ä"
    	},
    	saveDraft: {
    		caption: "Š_Draft___ä",
    		dialogTitle: "Š_Save a Local Draft______ä"
    	},
    	del: {
    		caption: "Š_Delete___ä",
    		dialogTitle: "Š_Delete Metadata______ä",
    		prompt: "Š_Are you sure you want to delete this metadata_______________ä?",
    		working: "Š_Deleting metadata_______ä...",
    		errorDeleting: "Š_An error occurred, your metadata was not deleted________________ä."
    	},
    	transform: {
    		caption: "Š_Transform____ä",
    		dialogTitle: "Š_Transform To_____ä",
    		prompt: "",
    		working: "Š_Transforming______ä...",
    		errorTransforming: "Š_An error occurred while transforming your document________________ä."
    	},
    	errorDialog: {
    		dialogTitle: "Š_There was an error______ä"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Š_Metadata___ä"
      	}
      }
    },
    
  	calendar: {
  		button: "Š_Calendar____ä...",
  		title: "Š_Calendar___ä"
  	},
    
  	geoExtent: {
  		button: "Š_Set Geographic Extent________ä...",
  		title: "Š_Geographic Extent______ä",
  		navigate: "Š_Navigate___ä",
  		draw: "Š_Draw a Rectangle______ä",
  		drawHint: "Š_Press down to start and let go to finish_____________ä."
  	},
  	
    hints: {
    	date: "Š_(yyyy or yyyy-mm or yyyy-mm-dd)__________ä",
    	dateTime: "Š_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ä",
    	dateOrDateTime: "Š_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ä",
    	delimitedTextArea: "Š_(use comma or newline to separate)___________ä",
    	fgdcDate: "Š_(yyyy or yyyy-mm or yyyy-mm-dd)__________ä",
    	fgdcTime: "Š_(hh:mm:ss.sss[+-]hh:mm)________ä",
    	integer: "Š_(enter an integer)______ä",
    	latitude: "Š_(decimal degrees)______ä",
    	longitude: "Š_(decimal degrees)______ä",
    	number: "Š_(enter a number)______ä",
    	numberGreaterThanZero: "Š_(enter a number > 0)_______ä"
    },
    
    isoTopicCategoryCode: {
    	caption: "Š_Topic Category_____ä",
    	boundaries: "Š_Administrative and Political Boundaries_____________ä",
    	farming: "Š_Agriculture and Farming________ä",
    	climatologyMeteorologyAtmosphere: "Š_Atmosphere and Climatic________ä",
    	biota: "Š_Biology and Ecology_______ä",
    	economy: "Š_Business and Economic_______ä",
    	planningCadastre: "Š_Cadastral____ä",
    	society: "Š_Cultural, Society and Demography___________ä",
    	elevation: "Š_Elevation and Derived Products__________ä",
    	environment: "Š_Environment and Conservation_________ä",
    	structure: "Š_Facilities and Structures_________ä",
    	geoscientificInformation: "Š_Geological and Geophysical_________ä",
    	health: "Š_Human Health and Disease________ä",
    	imageryBaseMapsEarthCover: "Š_Imagery and Base Maps_______ä",
    	inlandWaters: "Š_Inland Water Resources________ä",
    	location: "Š_Locations and Geodetic Networks__________ä",
    	intelligenceMilitary: "Š_Military___ä",
    	oceans: "Š_Oceans and Estuaries_______ä",
    	transportation: "Š_Transportation Networks________ä",
    	utilitiesCommunication: "Š_Utilities and Communication_________ä"
    },
    
    multiplicity: {
    	moveElementDown: "Š_Move Section Down______ä",
    	moveElementUp: "Š_Move Section Up______ä",
    	removeElement: "Š_Remove Section_____ä",
    	repeatElement: "Š_Repeat Section_____ä"
    },
    
    serviceTypes: {
  		featureService: "Š_Feature Service______ä",
  		mapService: "Š_Map Service____ä",
  		imageService: "Š_Image Service_____ä",
  		wms: "Š_WMS__ä",
  		wfs: "Š_WFS__ä",
  		wcs: "Š_WCS__ä"
    },
    
    validation: {
    	pattern: "Š_{label} - {message}_______ä",
    	patternWithHint: "Š_{label} - {message} {hint}_________ä",
	    ok: "Š_OK__ä",
	    empty: "Š_A value is required_______ä.",
	    date: "Š_The value must be a date_________ä.",
	    integer: "Š_The value must be an integer__________ä.",
	    number: "Š_The value must be an number_________ä.",
	    other: "Š_Invalid value_____ä."
    },
    
    validationPane: {
    	clearMessages: "Š_Clear Messages_____ä"
    }
    
  })
);
