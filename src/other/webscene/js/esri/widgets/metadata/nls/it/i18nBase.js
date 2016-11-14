define(
   ({
  	
    general: {
      cancel: "Annulla",
      close: "Chiudi",
    	none: "é_None__È",
    	ok: "é_OK__È",
    	other: "é_Other___È",
    	stamp: "é_Stamp___È"
    },
    
    editor: {
      noMetadata: "Non ci sono metadati per questo elemento.",
    	xmlViewOnly: "é_This type of metadata can only be viewed as an XML________________È.",
    	editorDialog: {
    		caption: "é_Metadata___È",
    		captionPattern: "é_Metadata for {title}_______È"
    	},
    	primaryToolbar: {
    		view: "é_View__È",
    		viewXml: "é_View XML___È",
    		edit: "é_Edit__È",
    		initializing: "é_Loading____È...",
    		startingEditor: "é_Starting editor______È...",
    		loadingDocument: "é_Loading document_______È...",
    		updatingDocument: "é_Updating document_______È...",
    		generatingView: "é_Generating view______È...",
    		errors: {
    			errorGeneratingView: "é_An error occurred while generating the view______________È.",
    			errorLoadingDocument: "é_An error occurred while loading the document_______________È."
    		}
    	},
    	changesNotSaved: {
    		prompt: "é_Your document has changes that have not been saved________________È.",
    		dialogTitle: "é_Close Metadata Editor_______È",
    		closeButton: "é_Discard & Close______È"
    	},
    	download: {
    		caption: "é_Download___È",
    		dialogTitle: "é_Download___È",
    		prompt: "é_Click here to download your file___________È."
    	},
    	load: {
    		caption: "é_Load__È",
    		dialogTitle: "é_Load Metadata_____È",
    		typeTab: "é_A Type___È",
    		fileTab: "é_A File___È",
    		templateTab: "é_A Template____È",
    		itemTab: "é_Your Item____È",
    		filePrompt: "é_Select a local XML file________È:",
    		templatePrompt: "é_Select a local XML file (key properties will be updated)__________________È:",
    		pullItem: "é_Update metadata with key properties of your item________________È.",
    		importWarning: "é_The selected file did not match a supported format________________È.",
    		loading: "é_Loading____È...",
    		noMetadata: "é_Metadata can be created for this item by choosing one of the following options_________________________È.",
    		unrecognizedMetadata: "é_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________È.",
    		errorLoading: "é_There was an error while loading___________È.",
    		warnings: {
    			badFile: "é_The selected file could not be loaded____________È.",
    			notAnXml: "é_The selected file is not an XML file____________È.",
    			notSupported: "é_This type of file is not supported____________È."
    		}
    	},
    	save: {
    		caption: "é_Save__È",
    		dialogTitle: "é_Save Metadata_____È",
    		working: "é_Saving metadata______È...",
    		errorSaving: "é_An error occurred, your metadata was not saved_______________È.",
    		saveDialog: {
    			pushCaption: "é_Apply changes to your item_________È"
    		}
    	},
    	saveAndClose: {
    		caption: "é_Save & Close_____È"
    	},
    	saveDraft: {
    		caption: "é_Draft___È",
    		dialogTitle: "é_Save a Local Draft______È"
    	},
    	del: {
    		caption: "é_Delete___È",
    		dialogTitle: "é_Delete Metadata______È",
    		prompt: "é_Are you sure you want to delete this metadata_______________È?",
    		working: "é_Deleting metadata_______È...",
    		errorDeleting: "é_An error occurred, your metadata was not deleted________________È."
    	},
    	transform: {
    		caption: "é_Transform____È",
    		dialogTitle: "é_Transform To_____È",
    		prompt: "",
    		working: "é_Transforming______È...",
    		errorTransforming: "é_An error occurred while transforming your document________________È."
    	},
    	errorDialog: {
    		dialogTitle: "é_There was an error______È"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "é_Metadata___È"
      	}
      }
    },
    
  	calendar: {
  		button: "é_Calendar____È...",
  		title: "é_Calendar___È"
  	},
    
  	geoExtent: {
  		button: "é_Set Geographic Extent________È...",
  		title: "é_Geographic Extent______È",
  		navigate: "é_Navigate___È",
  		draw: "é_Draw a Rectangle______È",
  		drawHint: "é_Press down to start and let go to finish_____________È."
  	},
  	
    hints: {
    	date: "é_(yyyy or yyyy-mm or yyyy-mm-dd)__________È",
    	dateTime: "é_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________È",
    	dateOrDateTime: "é_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________È",
    	delimitedTextArea: "é_(use comma or newline to separate)___________È",
    	fgdcDate: "é_(yyyy or yyyy-mm or yyyy-mm-dd)__________È",
    	fgdcTime: "é_(hh:mm:ss.sss[+-]hh:mm)________È",
    	integer: "é_(enter an integer)______È",
    	latitude: "é_(decimal degrees)______È",
    	longitude: "é_(decimal degrees)______È",
    	number: "é_(enter a number)______È",
    	numberGreaterThanZero: "é_(enter a number > 0)_______È"
    },
    
    isoTopicCategoryCode: {
    	caption: "é_Topic Category_____È",
    	boundaries: "é_Administrative and Political Boundaries_____________È",
    	farming: "é_Agriculture and Farming________È",
    	climatologyMeteorologyAtmosphere: "é_Atmosphere and Climatic________È",
    	biota: "é_Biology and Ecology_______È",
    	economy: "é_Business and Economic_______È",
    	planningCadastre: "é_Cadastral____È",
    	society: "é_Cultural, Society and Demography___________È",
    	elevation: "é_Elevation and Derived Products__________È",
    	environment: "é_Environment and Conservation_________È",
    	structure: "é_Facilities and Structures_________È",
    	geoscientificInformation: "é_Geological and Geophysical_________È",
    	health: "é_Human Health and Disease________È",
    	imageryBaseMapsEarthCover: "é_Imagery and Base Maps_______È",
    	inlandWaters: "é_Inland Water Resources________È",
    	location: "é_Locations and Geodetic Networks__________È",
    	intelligenceMilitary: "é_Military___È",
    	oceans: "é_Oceans and Estuaries_______È",
    	transportation: "é_Transportation Networks________È",
    	utilitiesCommunication: "é_Utilities and Communication_________È"
    },
    
    multiplicity: {
    	moveElementDown: "é_Move Section Down______È",
    	moveElementUp: "é_Move Section Up______È",
    	removeElement: "é_Remove Section_____È",
    	repeatElement: "é_Repeat Section_____È"
    },
    
    serviceTypes: {
  		featureService: "é_Feature Service______È",
  		mapService: "é_Map Service____È",
  		imageService: "é_Image Service_____È",
  		wms: "é_WMS__È",
  		wfs: "é_WFS__È",
  		wcs: "é_WCS__È"
    },
    
    validation: {
    	pattern: "é_{label} - {message}_______È",
    	patternWithHint: "é_{label} - {message} {hint}_________È",
	    ok: "é_OK__È",
	    empty: "é_A value is required_______È.",
	    date: "é_The value must be a date_________È.",
	    integer: "é_The value must be an integer__________È.",
	    number: "é_The value must be an number_________È.",
	    other: "é_Invalid value_____È."
    },
    
    validationPane: {
    	clearMessages: "é_Clear Messages_____È"
    }
    
  })
);
