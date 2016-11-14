define(
   ({
  	
    general: {
      cancel: "キャンセル",
      close: "閉じる",
    	none: "須_None__鷗",
    	ok: "須_OK__鷗",
    	other: "須_Other___鷗",
    	stamp: "須_Stamp___鷗"
    },
    
    editor: {
      noMetadata: "このアイテムにはメタデータがありません。",
    	xmlViewOnly: "須_This type of metadata can only be viewed as an XML________________鷗.",
    	editorDialog: {
    		caption: "須_Metadata___鷗",
    		captionPattern: "須_Metadata for {title}_______鷗"
    	},
    	primaryToolbar: {
    		view: "須_View__鷗",
    		viewXml: "須_View XML___鷗",
    		edit: "須_Edit__鷗",
    		initializing: "須_Loading____鷗...",
    		startingEditor: "須_Starting editor______鷗...",
    		loadingDocument: "須_Loading document_______鷗...",
    		updatingDocument: "須_Updating document_______鷗...",
    		generatingView: "須_Generating view______鷗...",
    		errors: {
    			errorGeneratingView: "須_An error occurred while generating the view______________鷗.",
    			errorLoadingDocument: "須_An error occurred while loading the document_______________鷗."
    		}
    	},
    	changesNotSaved: {
    		prompt: "須_Your document has changes that have not been saved________________鷗.",
    		dialogTitle: "須_Close Metadata Editor_______鷗",
    		closeButton: "須_Discard & Close______鷗"
    	},
    	download: {
    		caption: "須_Download___鷗",
    		dialogTitle: "須_Download___鷗",
    		prompt: "須_Click here to download your file___________鷗."
    	},
    	load: {
    		caption: "須_Load__鷗",
    		dialogTitle: "須_Load Metadata_____鷗",
    		typeTab: "須_A Type___鷗",
    		fileTab: "須_A File___鷗",
    		templateTab: "須_A Template____鷗",
    		itemTab: "須_Your Item____鷗",
    		filePrompt: "須_Select a local XML file________鷗:",
    		templatePrompt: "須_Select a local XML file (key properties will be updated)__________________鷗:",
    		pullItem: "須_Update metadata with key properties of your item________________鷗.",
    		importWarning: "須_The selected file did not match a supported format________________鷗.",
    		loading: "須_Loading____鷗...",
    		noMetadata: "須_Metadata can be created for this item by choosing one of the following options_________________________鷗.",
    		unrecognizedMetadata: "須_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________鷗.",
    		errorLoading: "須_There was an error while loading___________鷗.",
    		warnings: {
    			badFile: "須_The selected file could not be loaded____________鷗.",
    			notAnXml: "須_The selected file is not an XML file____________鷗.",
    			notSupported: "須_This type of file is not supported____________鷗."
    		}
    	},
    	save: {
    		caption: "須_Save__鷗",
    		dialogTitle: "須_Save Metadata_____鷗",
    		working: "須_Saving metadata______鷗...",
    		errorSaving: "須_An error occurred, your metadata was not saved_______________鷗.",
    		saveDialog: {
    			pushCaption: "須_Apply changes to your item_________鷗"
    		}
    	},
    	saveAndClose: {
    		caption: "須_Save & Close_____鷗"
    	},
    	saveDraft: {
    		caption: "須_Draft___鷗",
    		dialogTitle: "須_Save a Local Draft______鷗"
    	},
    	del: {
    		caption: "須_Delete___鷗",
    		dialogTitle: "須_Delete Metadata______鷗",
    		prompt: "須_Are you sure you want to delete this metadata_______________鷗?",
    		working: "須_Deleting metadata_______鷗...",
    		errorDeleting: "須_An error occurred, your metadata was not deleted________________鷗."
    	},
    	transform: {
    		caption: "須_Transform____鷗",
    		dialogTitle: "須_Transform To_____鷗",
    		prompt: "",
    		working: "須_Transforming______鷗...",
    		errorTransforming: "須_An error occurred while transforming your document________________鷗."
    	},
    	errorDialog: {
    		dialogTitle: "須_There was an error______鷗"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "須_Metadata___鷗"
      	}
      }
    },
    
  	calendar: {
  		button: "須_Calendar____鷗...",
  		title: "須_Calendar___鷗"
  	},
    
  	geoExtent: {
  		button: "須_Set Geographic Extent________鷗...",
  		title: "須_Geographic Extent______鷗",
  		navigate: "須_Navigate___鷗",
  		draw: "須_Draw a Rectangle______鷗",
  		drawHint: "須_Press down to start and let go to finish_____________鷗."
  	},
  	
    hints: {
    	date: "須_(yyyy or yyyy-mm or yyyy-mm-dd)__________鷗",
    	dateTime: "須_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________鷗",
    	dateOrDateTime: "須_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________鷗",
    	delimitedTextArea: "須_(use comma or newline to separate)___________鷗",
    	fgdcDate: "須_(yyyy or yyyy-mm or yyyy-mm-dd)__________鷗",
    	fgdcTime: "須_(hh:mm:ss.sss[+-]hh:mm)________鷗",
    	integer: "須_(enter an integer)______鷗",
    	latitude: "須_(decimal degrees)______鷗",
    	longitude: "須_(decimal degrees)______鷗",
    	number: "須_(enter a number)______鷗",
    	numberGreaterThanZero: "須_(enter a number > 0)_______鷗"
    },
    
    isoTopicCategoryCode: {
    	caption: "須_Topic Category_____鷗",
    	boundaries: "須_Administrative and Political Boundaries_____________鷗",
    	farming: "須_Agriculture and Farming________鷗",
    	climatologyMeteorologyAtmosphere: "須_Atmosphere and Climatic________鷗",
    	biota: "須_Biology and Ecology_______鷗",
    	economy: "須_Business and Economic_______鷗",
    	planningCadastre: "須_Cadastral____鷗",
    	society: "須_Cultural, Society and Demography___________鷗",
    	elevation: "須_Elevation and Derived Products__________鷗",
    	environment: "須_Environment and Conservation_________鷗",
    	structure: "須_Facilities and Structures_________鷗",
    	geoscientificInformation: "須_Geological and Geophysical_________鷗",
    	health: "須_Human Health and Disease________鷗",
    	imageryBaseMapsEarthCover: "須_Imagery and Base Maps_______鷗",
    	inlandWaters: "須_Inland Water Resources________鷗",
    	location: "須_Locations and Geodetic Networks__________鷗",
    	intelligenceMilitary: "須_Military___鷗",
    	oceans: "須_Oceans and Estuaries_______鷗",
    	transportation: "須_Transportation Networks________鷗",
    	utilitiesCommunication: "須_Utilities and Communication_________鷗"
    },
    
    multiplicity: {
    	moveElementDown: "須_Move Section Down______鷗",
    	moveElementUp: "須_Move Section Up______鷗",
    	removeElement: "須_Remove Section_____鷗",
    	repeatElement: "須_Repeat Section_____鷗"
    },
    
    serviceTypes: {
  		featureService: "須_Feature Service______鷗",
  		mapService: "須_Map Service____鷗",
  		imageService: "須_Image Service_____鷗",
  		wms: "須_WMS__鷗",
  		wfs: "須_WFS__鷗",
  		wcs: "須_WCS__鷗"
    },
    
    validation: {
    	pattern: "須_{label} - {message}_______鷗",
    	patternWithHint: "須_{label} - {message} {hint}_________鷗",
	    ok: "須_OK__鷗",
	    empty: "須_A value is required_______鷗.",
	    date: "須_The value must be a date_________鷗.",
	    integer: "須_The value must be an integer__________鷗.",
	    number: "須_The value must be an number_________鷗.",
	    other: "須_Invalid value_____鷗."
    },
    
    validationPane: {
    	clearMessages: "須_Clear Messages_____鷗"
    }
    
  })
);
