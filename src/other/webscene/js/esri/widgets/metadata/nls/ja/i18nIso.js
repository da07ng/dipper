define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "須_ISO 19115 (Data)______鷗",
    		description: ""
    	},
    	service: {
    		caption: "須_ISO 19119 (Service)_______鷗",
    		description: ""
    	},
    	gmi: {
    		caption: "須_ISO 19115-2 (Imagery and Gridded Data)____________鷗",
    		description: ""
    	}
    },
    
    general: {
    	reference: "須_Reference____鷗"
    },
    
    sections: {
    	metadata: "須_Metadata___鷗",
    	identification: "須_Identification_____鷗",
    	distribution: "須_Distribution_____鷗",
    	quality: "須_Quality___鷗",
    	acquisition: "須_Acquisition____鷗"
    },
    
    metadataSection: {
    	identifier: "須_Identifier____鷗",
    	contact: "須_Contact___鷗",
    	date: "須_Date__鷗",
    	standard: "須_Standard___鷗",
    	reference: "須_Reference____鷗"
    },
    
    identificationSection: {
    	citation: "須_Citation___鷗",
    	description: "須_Description____鷗",
    	contact: "須_Contact___鷗",
    	thumbnail: "須_Thumbnail____鷗",
    	keywords: "須_Keywords___鷗",
    	constraints: "須_Constraints____鷗",
    	resource: "須_Resource___鷗",
    	resourceTab: {
    		representation: "須_Representation_____鷗",
    		language: "須_Language___鷗",
    		classification: "須_Classification_____鷗",
    		extent: "須_Extent___鷗"
    	},
    	serviceResourceTab: {
    		serviceType: "須_Service Type_____鷗",
    		extent: "須_Extent___鷗",
    		couplingType: "須_Coupling Type_____鷗",
    		operation: "須_Operation____鷗",
    		operatesOn: "須_Operates On____鷗"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "須_Scope___鷗",
    	conformance: "須_Conformance____鷗",
    	lineage: "須_Lineage___鷗"
    },
    
    acquisitionSection: {
    	requirement: "須_Requirement____鷗",
    	objective: "須_Objective____鷗",
    	instrument: "須_Instrument____鷗",
    	plan: "須_Plan__鷗",
    	operation: "須_Operation____鷗",
    	platform: "須_Platform___鷗",
    	environment: "須_Environment____鷗"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "須_Abstract___鷗",
    	purpose: "須_Purpose___鷗",
    	credit: "須_Credits___鷗",
    	pointOfContact: "須_Point of Contact______鷗",
    	resourceMaintenance: "須_Maintenance____鷗",
    	graphicOverview: "須_Graphic Overview______鷗",
    	descriptiveKeywords: "須_Keyword Collection______鷗",
    	resourceConstraints: "須_Constraints____鷗"
    },
    
    CI_Address: {
    	deliveryPoint: "須_Delivery Point_____鷗",
    	city: "須_City__鷗",
    	administrativeArea: "須_Administrative Area_______鷗",
    	postalCode: "須_Postal Code____鷗",
    	country: "須_Country___鷗",
    	electronicMailAddress: "須_E-Mail Address_____鷗"
    },
    
    CI_Citation: {
    	title: "須_Title___鷗",
    	alternateTitle: "須_Alternate Title______鷗",
    	identifier: "須_Unique Resource Identifier_________鷗",
    	resource: {
    		title: "須_Resource Title_____鷗",
    		date: "須_Resource Date_____鷗"
    	},
    	specification: {
    		title: "須_Specification Title_______鷗",
    		date: "須_Specification Date______鷗"
    	}
    },
    
    CI_Contact: {
    	phone: "須_Phone___鷗",
    	address: "須_Address___鷗",
    	onlineResource: "須_Online Resource______鷗",
    	hoursOfService: "須_Hours of Service______鷗",
    	contactInstructions: "須_Contact Instructions_______鷗"
    },
    
    CI_Date: {
    	date: "須_Date__鷗",
    	dateType: "須_Date Type____鷗"
    },
    
  	CI_DateTypeCode: {
  		caption: "須_Date Type____鷗",
  		creation: "須_Creation Date_____鷗",
  		publication: "須_Publication Date______鷗",
  		revision: "須_Revision Date_____鷗"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "須_Function___鷗",
    	download: "須_Download___鷗",
    	information: "須_Information____鷗",
    	offlineAccess: "須_Offline Access_____鷗",
    	order: "須_Order___鷗",
    	search: "須_Search___鷗"
    },
    
    CI_OnlineResource: {
    	caption: "須_Online Resource______鷗",
    	linkage: "須_URL__鷗",
    	protocol: "須_Protocol___鷗",
    	applicationProfile: "須_Application Profile_______鷗",
    	name: "須_Name__鷗",
    	description: "須_Description____鷗",
    	sFunction: "須_Function___鷗"
    },
    
    CI_ResponsibleParty: {
    	caption: "須_Point of Contact______鷗",
    	individualName: "須_Individual Name______鷗",
    	organisationName: "須_Organisation Name______鷗",
    	positionName: "須_Position Name_____鷗",
    	contactInfo: "須_Contact Info_____鷗",
    	role: "須_Role__鷗"
    },
    
    CI_RoleCode: {
    	caption: "須_Role__鷗",
    	resourceProvider: "須_Resource Provider______鷗",
    	custodian: "須_Custodian____鷗",
    	owner: "須_Owner___鷗",
    	user: "須_User__鷗",
    	distributor: "須_Distributor____鷗",
    	originator: "須_Originator____鷗",
    	pointOfContact: "須_Point of Contact______鷗",
    	principalInvestigator: "須_Principal Investigator________鷗",
    	processor: "須_Processor____鷗",
    	publisher: "須_Publisher____鷗",
    	author: "須_Author___鷗"
    },
    
    CI_Telephone: {
    	voice: "須_Voice___鷗",
    	facsimile: "須_Fax__鷗"
    },
    
    DCPList: {
    	caption: "須_DCP__鷗",
    	XML: "須_XML__鷗",
    	CORBA: "須_CORBA___鷗",
    	JAVA: "須_JAVA__鷗",
    	COM: "須_COM__鷗",
    	SQL: "須_SQL__鷗",
    	WebServices: "須_WebServices____鷗"
    },
    
    DQ_ConformanceResult: {
    	caption: "須_Conformance Result______鷗",
    	explanation: "須_Explanation____鷗",
    	degree: {
    		caption: "須_Degree___鷗",
    		validationPerformed: "須_Validation Performed_______鷗",
    		conformant: "須_Conformant____鷗",
    		nonConformant: "須_Non Conformant_____鷗"
    	}
    },
    
    DQ_DataQuality: {
    	report: "須_Report___鷗"
    },
    
    DQ_Scope : {
    	level: "須_Scope (quality information applies to)____________鷗",
    	levelDescription: "須_Level Description______鷗"
    },
    
    EX_Extent: {
    	caption: "須_Extent___鷗",
    	description: "須_Description____鷗",
    	geographicElement: "須_Spatial Extent_____鷗",
    	temporalElement: "須_Temporal Extent______鷗",
    	verticalElement: "須_Vertical Extent______鷗"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "須_West Bounding Longitude________鷗",
    	eastBoundLongitude: "須_East Bounding Longitude________鷗",
    	southBoundLatitude: "須_South Bounding Latitude________鷗",
    	northBoundLatitude: "須_North Bounding Latitude________鷗"
    },
    
    EX_GeographicDescription: {
    	caption: "須_Geographic Description________鷗"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "須_Begin Date____鷗",
    		endPosition: "須_End Date___鷗"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "須_Minimum Value_____鷗",
    	maximumValue: "須_Maximum Value_____鷗",
    	verticalCRS: "須_Vertical CRS_____鷗"
    },
    
    Length: {
    	caption: "須_Length___鷗",
    	uom: "須_Units of Measure______鷗",
    	km: "須_Kilometers____鷗",
    	m: "須_Meters___鷗",
    	mi: "須_Miles___鷗",
    	ft: "須_Feet__鷗"
    },
    
    LI_Lineage: {
    	statement: "須_Lineage Statement______鷗"
    },
    
    MD_BrowseGraphic: {
    	fileName: "須_Browse Graphic URL______鷗",
    	fileDescription: "須_Browse Graphic Caption________鷗",
    	fileType: "須_Browse Graphic Type_______鷗"
    },
    
    MD_ClassificationCode: {
    	unclassified: "須_Unclassified_____鷗",
    	restricted: "須_Restricted____鷗",
    	confidential: "須_Confidential_____鷗",
    	secret: "須_Secret___鷗",
    	topSecret: "須_Top Secret____鷗"
    },
    
    MD_Constraints: {
    	caption: "須_Usage Constraints______鷗",
    	useLimitation: "須_Use Limitation_____鷗"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "須_Spatial Representation Type_________鷗",
    	spatialResolution: "須_Spatial Resolution______鷗",
    	language: "須_Resource Language______鷗",
    	supplementalInformation: "須_Supplemental_____鷗"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "須_Online___鷗"
    },
    
    MD_Distribution: {
    	distributionFormat: "須_Distribution Format_______鷗",
    	transferOptions: "須_Transfer Options______鷗"
    },
    
    MD_Format: {
    	name: "須_Format Name____鷗",
    	version: "須_Format Version_____鷗"
    },
    
    MD_Identifier: {
    	caption: "須_URI__鷗",
    	identifierCaption: "須_Identifier____鷗",
    	code: "須_Code__鷗"
    },
    
    MD_Keywords: {
    	delimitedCaption: "須_Keywords___鷗",
    	thesaurusName: "須_Associated Thesaurus_______鷗"
    },
    
    MD_KeywordTypeCode: {
    	caption: "須_Keyword Type_____鷗",
    	discipline: "須_Discipline____鷗",
    	place: "須_Place___鷗",
    	stratum: "須_Stratum___鷗",
    	temporal: "須_Temporal___鷗",
    	theme: "須_Theme___鷗"
    },
    
    MD_LegalConstraints: {
    	caption: "須_Legal Constraints______鷗",
    	accessConstraints: "須_Access Constraints______鷗",
    	useConstraints: "須_Use Constraints______鷗",
    	otherConstraints: "須_Other Constraints______鷗"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "須_Frequency____鷗",
    	continual: "須_Continual____鷗",
    	daily: "須_Daily___鷗",
    	weekly: "須_Weekly___鷗",
    	fortnightly: "須_Fortnightly____鷗",
    	monthly: "須_Monthly___鷗",
    	quarterly: "須_Quarterly____鷗",
    	biannually: "須_Biannually____鷗",
    	annually: "須_Annually___鷗",
    	asNeeded: "須_As Needed____鷗",
    	irregular: "須_Irregular____鷗",
    	notPlanned: "須_Not Planned____鷗",
    	unknown: "須_Unknown___鷗"
    },
    
    MD_Metadata: {
    	caption: "須_Metadata___鷗",
    	fileIdentifier: "須_File Identifier______鷗",
    	language: "須_Metadata Language______鷗",
    	hierarchyLevel: "須_Hierarchy Level______鷗",
    	hierarchyLevelName: "須_Hierarchy Level Name_______鷗",
    	contact: "須_Metadata Contact______鷗",
    	dateStamp: "須_Metadata Date_____鷗",
    	metadataStandardName: "須_Metadata Standard Name________鷗",
    	metadataStandardVersion: "須_Metadata Standard Version_________鷗",
    	referenceSystemInfo: "須_Reference System______鷗",
    	identificationInfo: "須_Identification_____鷗",
    	distributionInfo: "須_Distribution_____鷗",
    	dataQualityInfo: "須_Quality___鷗"
    },
    
    MD_ProgressCode: {
    	caption: "須_Progress Code_____鷗",
    	completed: "須_Completed____鷗",
    	historicalArchive: "須_Historical Archive______鷗",
    	obsolete: "須_Obsolete___鷗",
    	onGoing: "須_On Going___鷗",
    	planned: "須_Planned___鷗",
    	required: "須_Required___鷗",
    	underDevelopment: "須_Under Development______鷗"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "須_Denominator____鷗"
    },
    
    MD_Resolution: {
    	equivalentScale: "須_Equivalent Scale______鷗",
    	distance: "須_Distance___鷗"
    },
    
    MD_RestrictionCode: {
    	copyright: "須_Copyright____鷗",
    	patent: "須_Patent___鷗",
    	patentPending: "須_Patent Pending_____鷗",
    	trademark: "須_Trademark____鷗",
    	license: "須_License___鷗",
    	intellectualPropertyRights: "須_Intellectual Property Rights_________鷗",
    	restricted: "須_Restricted____鷗",
    	otherRestrictions: "須_Other Restrictions______鷗"
    },
    
    MD_ScopeCode: {
    	attribute: "須_Attribute____鷗",
    	attributeType: "須_Attribute type_____鷗",
    	collectionHardware: "須_Collection hardware_______鷗",
    	collectionSession: "須_Collection session______鷗",
    	dataset: "須_Dataset___鷗",
    	series: "須_Series___鷗",
    	nonGeographicDataset: "須_Non geographic dataset________鷗",
    	dimensionGroup: "須_Dimension group______鷗",
    	feature: "須_Feature___鷗",
    	featureType: "須_Feature type_____鷗",
    	propertyType: "須_Property type_____鷗",
    	fieldSession: "須_Field session_____鷗",
    	software: "須_Software___鷗",
    	service: "須_Service___鷗",
    	model: "須_Model___鷗",
    	tile: "須_Tile__鷗"
    },
    
    MD_ScopeDescription: {
    	attributes: "須_Attributes____鷗",
    	features: "須_Features___鷗",
    	featureInstances: "須_Feature Instances______鷗",
    	attributeInstances: "須_Attribute Instances_______鷗",
    	dataset: "須_Dataset___鷗",
    	other: "須_Other___鷗"
    },
    
    MD_SecurityConstraints: {
    	caption: "須_Security Constraints_______鷗",
    	classification: "須_Classification_____鷗",
    	userNote: "須_User Note____鷗",
    	classificationSystem: "須_Classification System_______鷗",
    	handlingDescription: "須_Handling Description_______鷗"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "須_Spatial Representation Type_________鷗",
    	vector: "須_Vector___鷗",
    	grid: "須_Grid__鷗",
    	textTable: "須_Text Table____鷗",
    	tin: "須_TIN__鷗",
    	stereoModel: "須_Stereo Model_____鷗",
    	video: "須_Video___鷗"
    },
    
    MD_TopicCategoryCode: {
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
    
    MI_ContextCode: {
    	caption: "須_Context___鷗",
    	acquisition: "須_Acquisition____鷗",
    	pass: "須_Pass__鷗",
    	wayPoint: "須_Waypoint___鷗"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "須_Environmental Conditions________鷗",
    	averageAirTemperature: "須_Average Air Temperature________鷗",
    	maxRelativeHumidity: "須_Maximum Relative Humidity_________鷗",
    	maxAltitude: "須_Maximum Altitude______鷗",
    	meterologicalConditions: "須_Meterological Conditions________鷗"
    },
    
    MI_Event: {
    	identifier: "須_Event Identifier______鷗",
    	time: "須_Time__鷗",
    	expectedObjectiveReference: "須_Expected Objective (Objective Identifer)_____________鷗",
    	relatedSensorReference: "須_Related Sensor (Instrument Identifer)____________鷗",
    	relatedPassReference: "須_Related Pass (Platform Pass Identifer)____________鷗"
    },

    MI_GeometryTypeCode: {
    	point: "須_Point___鷗",
    	linear: "須_Linear___鷗",
    	areal: "須_Areal___鷗",
    	strip: "須_Strip___鷗"
    },
    
    MI_Instrument: {
    	citation: "須_Instrument Citation_______鷗",
    	identifier: "須_Instrument Identifier_______鷗",
    	sType: "須_Instrument Type______鷗",
    	description: "須_Instrument Description________鷗",
    	mountedOn: "須_Mounted On____鷗",
    	mountedOnPlatformReference: "須_Mounted On (Platform Identifier)___________鷗"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "須_Acquisition____鷗"
    },
    
    MI_Objective: {
    	caption: "須_Objective____鷗",
    	identifier: "須_Objective Identifier_______鷗",
    	priority: "須_Priority of Target______鷗",
    	sFunction: "須_Function of Objective_______鷗",
    	extent: "須_Extent___鷗",
    	pass: "須_Platform Pass_____鷗",
    	sensingInstrumentReference: "須_Sensing Instrument (Instrument Identifier)______________鷗",
    	objectiveOccurrence: "須_Events___鷗",
    	sections: {
    		identification: "須_Identification_____鷗",
    		extent: "須_Extent___鷗",
    		pass: "須_Pass__鷗",
    		sensingInstrument: "須_Sensing Instrument______鷗",
    		objectiveOccurrence: "須_Events___鷗"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "須_Type (Collection Technique for Objective)_____________鷗",
    	instantaneousCollection: "須_Instantaneous Collection________鷗",
    	persistentView: "須_Persistent View______鷗",
    	survey: "須_Survey___鷗"
    },
    
    MI_Operation: {
    	caption: "須_Operation____鷗",
    	description: "須_Operation Description_______鷗",
    	citation: "須_Operation Citation______鷗",
    	identifier: "須_Operation Identifier_______鷗",
    	status: "須_Operation Status______鷗",
    	objectiveReference: "須_Related Objective (Objective Identifier)_____________鷗",
    	planReference: "須_Related Plan (Plan Identifier)__________鷗",
    	significantEventReference: "須_Related Event (Event Identifier)___________鷗",
    	platformReference: "須_Related Platform (Platform Identifier)____________鷗",
    	sections: {
    		identification: "須_Identification_____鷗",
    		related: "須_Related___鷗"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "須_Operation Type_____鷗",
    	real: "須_Real__鷗",
    	simulated: "須_Simulated____鷗",
    	synthesized: "須_Synthesized____鷗"
    },
    
    MI_Plan: {
    	sType: "須_Sampling Geometry for Collecting Data____________鷗",
    	status: "須_Status of Plan_____鷗",
    	citation: "須_Citation of Authority Requesting Collection______________鷗",
    	satisfiedRequirementReference: "須_Satisfied Requirement (Requirement Identifier)_______________鷗",
    	operationReference: "須_Related Operation (Operation Identifier)_____________鷗"
    },
    
    MI_Platform: {
    	citation: "須_Platform Citation______鷗",
    	identifier: "須_Platform Identifier_______鷗",
    	description: "須_Description of Platform Supporting the Instrument________________鷗",
    	sponsor: "須_Sponsor Organization for Platform___________鷗",
    	instrument: "須_Instrument(s) mounted on the platform____________鷗",
    	instrumentReference: "須_Instrument Identifier_______鷗",
    	sections: {
    		identification: "須_Identification_____鷗",
    		sponsor: "須_Sponsor___鷗",
    		instruments: "須_Instruments____鷗"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "須_Platform Pass Identifier________鷗",
    	extent: "須_Platform Pass Extent_______鷗",
    	relatedEventReference: "須_Related Event (Event Identifer)__________鷗"
    },

    MI_PriorityCode: {
    	critical: "須_Critical___鷗", 
    	highImportance: "須_High Importance______鷗",
    	mediumImportance: "須_Medium Importance______鷗",
    	lowImportance: "須_Low Importance_____鷗"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "須_Requested Date Of Collection_________鷗",
    	latestAcceptableDate: "須_Latest Acceptable Date________鷗"
    },
    
    MI_Requirement: {
    	caption: "須_Requirement____鷗",
    	citation: "須_Citation for Requirement Guidance Material______________鷗",
    	identifier: "須_Requirement Identifier________鷗",
    	requestor: "須_Requestor of Requirement________鷗",
    	recipient: "須_Recipient of Requirement Results___________鷗",
    	priority: "須_Requirement Priority_______鷗",
    	requestedDate: "須_Requested Date_____鷗",
    	expiryDate: "須_Expiry Date____鷗",
    	satisifiedPlanReference: "須_Satisfied Plan (Plan Identifier)___________鷗",
    	sections: {
    		identification: "須_Identification_____鷗",
    		requestor: "須_Requestor____鷗",
    		recipient: "須_Recipient____鷗",
    		priorityAndDates: "須_Priority And Dates______鷗",
    		satisifiedPlan: "須_Satisified  Plan______鷗"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "須_Sequence___鷗",
    	start: "須_Start___鷗",
    	end: "須_End__鷗",
    	instantaneous: "須_Instantaneous_____鷗"
    },
    
    MI_TriggerCode: {
    	caption: "須_Trigger___鷗",
    	automatic: "須_Automatic____鷗",
    	manual: "須_Manual___鷗",
    	preProgrammed: "須_Preprogrammed_____鷗"
    },
    
    ObjectReference: {
    	uuidref: "須_UUID Reference_____鷗",
    	xlinkref: "須_URL Reference_____鷗"
    },
    
    RS_Identifier: {
    	caption: "須_ID Plus Code Space______鷗",
    	code: "須_Code__鷗",
    	codeSpace: "須_Code Space____鷗"
    },
    
    SV_CouplingType: {
    	loose: "須_Loose___鷗",
    	mixed: "須_Mixed___鷗",
    	tight: "須_Tight___鷗"
    },
    
    SV_OperationMetadata: {
    	operationName: "須_Operation Name_____鷗",
    	DCP: "須_DCP__鷗",
    	connectPoint: "須_Connect Point_____鷗"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "須_ServiceType____鷗",
    	couplingType: "須_Coupling Type_____鷗",
    	containsOperations: "須_Operation Metadata______鷗",
    	operatesOn: "須_Operates On____鷗"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "須_Indeterminate Position________鷗",
    	indeterminates: {
    		before: "須_Before___鷗",
       	after: "須_After___鷗",
      	now: "須_Now__鷗",
      	unknown: "須_Unknown___鷗"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "須_GEMET Concept Keyword_______鷗",
    		tool: "須_Look Up____鷗...",
    		dialogTitle: "須_GEMET - Concept Keyword________鷗",
    		searchLabel: "須_Search___鷗:",
    		searchTip: "須_Search GEMET_____鷗"
    	},
    	theme: {
    		tool: "須_Look Up____鷗...",
    		dialogTitle: "須_GEMET - Inspire Data Theme_________鷗"
    	},
    	ioerror: "須_There was an error communicating with the GEMET service: {url}____________________鷗",
    	searching: "須_Searching GEMET______鷗...",
    	noMatch: "須_No matching results were found__________鷗.",
      languages: {
      	"bg": "須_Bulgarian____鷗",
      	"cs": "須_Czech___鷗",
      	"da": "須_Danish___鷗",
      	"nl": "須_Dutch___鷗",
      	"en": "須_English___鷗",
      	"et": "須_Estonian___鷗",
      	"fi": "須_Finnish___鷗",
      	"fr": "須_French___鷗",
      	"de": "須_German___鷗",
      	"el": "須_Greek___鷗",
      	"hu": "須_Hungarian____鷗",
      	"ga": "須_Gaelic (Irish)_____鷗",
      	"it": "須_Italian___鷗",
      	"lv": "須_Latvian___鷗",
      	"lt": "須_Lithuanian____鷗",
      	"mt": "須_Maltese___鷗",
      	"pl": "須_Polish___鷗", 
      	"pt": "須_Portuguese____鷗",
      	"ro": "須_Romanian___鷗",
      	"sk": "須_Slovak___鷗",
      	"sl": "須_Slovenian____鷗",  	
      	"es": "須_Spanish___鷗",
      	"sv": "須_Swedish___鷗"
      }
    }
   
  })
);
