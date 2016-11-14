define(
   ({
  	
    general: {
      cancel: "Atcelt",
      close: "Aizvērt",
    	none: "ķ_None__ū",
    	ok: "ķ_OK__ū",
    	other: "ķ_Other___ū",
    	stamp: "ķ_Stamp___ū"
    },
    
    editor: {
      noMetadata: "Šai vienībai nav metadatu.",
    	xmlViewOnly: "ķ_This type of metadata can only be viewed as an XML________________ū.",
    	editorDialog: {
    		caption: "ķ_Metadata___ū",
    		captionPattern: "ķ_Metadata for {title}_______ū"
    	},
    	primaryToolbar: {
    		view: "ķ_View__ū",
    		viewXml: "ķ_View XML___ū",
    		edit: "ķ_Edit__ū",
    		initializing: "ķ_Loading____ū...",
    		startingEditor: "ķ_Starting editor______ū...",
    		loadingDocument: "ķ_Loading document_______ū...",
    		updatingDocument: "ķ_Updating document_______ū...",
    		generatingView: "ķ_Generating view______ū...",
    		errors: {
    			errorGeneratingView: "ķ_An error occurred while generating the view______________ū.",
    			errorLoadingDocument: "ķ_An error occurred while loading the document_______________ū."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ķ_Your document has changes that have not been saved________________ū.",
    		dialogTitle: "ķ_Close Metadata Editor_______ū",
    		closeButton: "ķ_Discard & Close______ū"
    	},
    	download: {
    		caption: "ķ_Download___ū",
    		dialogTitle: "ķ_Download___ū",
    		prompt: "ķ_Click here to download your file___________ū."
    	},
    	load: {
    		caption: "ķ_Load__ū",
    		dialogTitle: "ķ_Load Metadata_____ū",
    		typeTab: "ķ_A Type___ū",
    		fileTab: "ķ_A File___ū",
    		templateTab: "ķ_A Template____ū",
    		itemTab: "ķ_Your Item____ū",
    		filePrompt: "ķ_Select a local XML file________ū:",
    		templatePrompt: "ķ_Select a local XML file (key properties will be updated)__________________ū:",
    		pullItem: "ķ_Update metadata with key properties of your item________________ū.",
    		importWarning: "ķ_The selected file did not match a supported format________________ū.",
    		loading: "ķ_Loading____ū...",
    		noMetadata: "ķ_Metadata can be created for this item by choosing one of the following options_________________________ū.",
    		unrecognizedMetadata: "ķ_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________ū.",
    		errorLoading: "ķ_There was an error while loading___________ū.",
    		warnings: {
    			badFile: "ķ_The selected file could not be loaded____________ū.",
    			notAnXml: "ķ_The selected file is not an XML file____________ū.",
    			notSupported: "ķ_This type of file is not supported____________ū."
    		}
    	},
    	save: {
    		caption: "ķ_Save__ū",
    		dialogTitle: "ķ_Save Metadata_____ū",
    		working: "ķ_Saving metadata______ū...",
    		errorSaving: "ķ_An error occurred, your metadata was not saved_______________ū.",
    		saveDialog: {
    			pushCaption: "ķ_Apply changes to your item_________ū"
    		}
    	},
    	saveAndClose: {
    		caption: "ķ_Save & Close_____ū"
    	},
    	saveDraft: {
    		caption: "ķ_Draft___ū",
    		dialogTitle: "ķ_Save a Local Draft______ū"
    	},
    	del: {
    		caption: "ķ_Delete___ū",
    		dialogTitle: "ķ_Delete Metadata______ū",
    		prompt: "ķ_Are you sure you want to delete this metadata_______________ū?",
    		working: "ķ_Deleting metadata_______ū...",
    		errorDeleting: "ķ_An error occurred, your metadata was not deleted________________ū."
    	},
    	transform: {
    		caption: "ķ_Transform____ū",
    		dialogTitle: "ķ_Transform To_____ū",
    		prompt: "",
    		working: "ķ_Transforming______ū...",
    		errorTransforming: "ķ_An error occurred while transforming your document________________ū."
    	},
    	errorDialog: {
    		dialogTitle: "ķ_There was an error______ū"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ķ_Metadata___ū"
      	}
      }
    },
    
  	calendar: {
  		button: "ķ_Calendar____ū...",
  		title: "ķ_Calendar___ū"
  	},
    
  	geoExtent: {
  		button: "ķ_Set Geographic Extent________ū...",
  		title: "ķ_Geographic Extent______ū",
  		navigate: "ķ_Navigate___ū",
  		draw: "ķ_Draw a Rectangle______ū",
  		drawHint: "ķ_Press down to start and let go to finish_____________ū."
  	},
  	
    hints: {
    	date: "ķ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ū",
    	dateTime: "ķ_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________ū",
    	dateOrDateTime: "ķ_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________ū",
    	delimitedTextArea: "ķ_(use comma or newline to separate)___________ū",
    	fgdcDate: "ķ_(yyyy or yyyy-mm or yyyy-mm-dd)__________ū",
    	fgdcTime: "ķ_(hh:mm:ss.sss[+-]hh:mm)________ū",
    	integer: "ķ_(enter an integer)______ū",
    	latitude: "ķ_(decimal degrees)______ū",
    	longitude: "ķ_(decimal degrees)______ū",
    	number: "ķ_(enter a number)______ū",
    	numberGreaterThanZero: "ķ_(enter a number > 0)_______ū"
    },
    
    isoTopicCategoryCode: {
    	caption: "ķ_Topic Category_____ū",
    	boundaries: "ķ_Administrative and Political Boundaries_____________ū",
    	farming: "ķ_Agriculture and Farming________ū",
    	climatologyMeteorologyAtmosphere: "ķ_Atmosphere and Climatic________ū",
    	biota: "ķ_Biology and Ecology_______ū",
    	economy: "ķ_Business and Economic_______ū",
    	planningCadastre: "ķ_Cadastral____ū",
    	society: "ķ_Cultural, Society and Demography___________ū",
    	elevation: "ķ_Elevation and Derived Products__________ū",
    	environment: "ķ_Environment and Conservation_________ū",
    	structure: "ķ_Facilities and Structures_________ū",
    	geoscientificInformation: "ķ_Geological and Geophysical_________ū",
    	health: "ķ_Human Health and Disease________ū",
    	imageryBaseMapsEarthCover: "ķ_Imagery and Base Maps_______ū",
    	inlandWaters: "ķ_Inland Water Resources________ū",
    	location: "ķ_Locations and Geodetic Networks__________ū",
    	intelligenceMilitary: "ķ_Military___ū",
    	oceans: "ķ_Oceans and Estuaries_______ū",
    	transportation: "ķ_Transportation Networks________ū",
    	utilitiesCommunication: "ķ_Utilities and Communication_________ū"
    },
    
    multiplicity: {
    	moveElementDown: "ķ_Move Section Down______ū",
    	moveElementUp: "ķ_Move Section Up______ū",
    	removeElement: "ķ_Remove Section_____ū",
    	repeatElement: "ķ_Repeat Section_____ū"
    },
    
    serviceTypes: {
  		featureService: "ķ_Feature Service______ū",
  		mapService: "ķ_Map Service____ū",
  		imageService: "ķ_Image Service_____ū",
  		wms: "ķ_WMS__ū",
  		wfs: "ķ_WFS__ū",
  		wcs: "ķ_WCS__ū"
    },
    
    validation: {
    	pattern: "ķ_{label} - {message}_______ū",
    	patternWithHint: "ķ_{label} - {message} {hint}_________ū",
	    ok: "ķ_OK__ū",
	    empty: "ķ_A value is required_______ū.",
	    date: "ķ_The value must be a date_________ū.",
	    integer: "ķ_The value must be an integer__________ū.",
	    number: "ķ_The value must be an number_________ū.",
	    other: "ķ_Invalid value_____ū."
    },
    
    validationPane: {
    	clearMessages: "ķ_Clear Messages_____ū"
    }
    
  })
);
