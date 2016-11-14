define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Š_ISO 19115 (Data)______ä",
    		description: ""
    	},
    	service: {
    		caption: "Š_ISO 19119 (Service)_______ä",
    		description: ""
    	},
    	gmi: {
    		caption: "Š_ISO 19115-2 (Imagery and Gridded Data)____________ä",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Š_Reference____ä"
    },
    
    sections: {
    	metadata: "Š_Metadata___ä",
    	identification: "Š_Identification_____ä",
    	distribution: "Š_Distribution_____ä",
    	quality: "Š_Quality___ä",
    	acquisition: "Š_Acquisition____ä"
    },
    
    metadataSection: {
    	identifier: "Š_Identifier____ä",
    	contact: "Š_Contact___ä",
    	date: "Š_Date__ä",
    	standard: "Š_Standard___ä",
    	reference: "Š_Reference____ä"
    },
    
    identificationSection: {
    	citation: "Š_Citation___ä",
    	description: "Š_Description____ä",
    	contact: "Š_Contact___ä",
    	thumbnail: "Š_Thumbnail____ä",
    	keywords: "Š_Keywords___ä",
    	constraints: "Š_Constraints____ä",
    	resource: "Š_Resource___ä",
    	resourceTab: {
    		representation: "Š_Representation_____ä",
    		language: "Š_Language___ä",
    		classification: "Š_Classification_____ä",
    		extent: "Š_Extent___ä"
    	},
    	serviceResourceTab: {
    		serviceType: "Š_Service Type_____ä",
    		extent: "Š_Extent___ä",
    		couplingType: "Š_Coupling Type_____ä",
    		operation: "Š_Operation____ä",
    		operatesOn: "Š_Operates On____ä"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Š_Scope___ä",
    	conformance: "Š_Conformance____ä",
    	lineage: "Š_Lineage___ä"
    },
    
    acquisitionSection: {
    	requirement: "Š_Requirement____ä",
    	objective: "Š_Objective____ä",
    	instrument: "Š_Instrument____ä",
    	plan: "Š_Plan__ä",
    	operation: "Š_Operation____ä",
    	platform: "Š_Platform___ä",
    	environment: "Š_Environment____ä"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Š_Abstract___ä",
    	purpose: "Š_Purpose___ä",
    	credit: "Š_Credits___ä",
    	pointOfContact: "Š_Point of Contact______ä",
    	resourceMaintenance: "Š_Maintenance____ä",
    	graphicOverview: "Š_Graphic Overview______ä",
    	descriptiveKeywords: "Š_Keyword Collection______ä",
    	resourceConstraints: "Š_Constraints____ä"
    },
    
    CI_Address: {
    	deliveryPoint: "Š_Delivery Point_____ä",
    	city: "Š_City__ä",
    	administrativeArea: "Š_Administrative Area_______ä",
    	postalCode: "Š_Postal Code____ä",
    	country: "Š_Country___ä",
    	electronicMailAddress: "Š_E-Mail Address_____ä"
    },
    
    CI_Citation: {
    	title: "Š_Title___ä",
    	alternateTitle: "Š_Alternate Title______ä",
    	identifier: "Š_Unique Resource Identifier_________ä",
    	resource: {
    		title: "Š_Resource Title_____ä",
    		date: "Š_Resource Date_____ä"
    	},
    	specification: {
    		title: "Š_Specification Title_______ä",
    		date: "Š_Specification Date______ä"
    	}
    },
    
    CI_Contact: {
    	phone: "Š_Phone___ä",
    	address: "Š_Address___ä",
    	onlineResource: "Š_Online Resource______ä",
    	hoursOfService: "Š_Hours of Service______ä",
    	contactInstructions: "Š_Contact Instructions_______ä"
    },
    
    CI_Date: {
    	date: "Š_Date__ä",
    	dateType: "Š_Date Type____ä"
    },
    
  	CI_DateTypeCode: {
  		caption: "Š_Date Type____ä",
  		creation: "Š_Creation Date_____ä",
  		publication: "Š_Publication Date______ä",
  		revision: "Š_Revision Date_____ä"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Š_Function___ä",
    	download: "Š_Download___ä",
    	information: "Š_Information____ä",
    	offlineAccess: "Š_Offline Access_____ä",
    	order: "Š_Order___ä",
    	search: "Š_Search___ä"
    },
    
    CI_OnlineResource: {
    	caption: "Š_Online Resource______ä",
    	linkage: "Š_URL__ä",
    	protocol: "Š_Protocol___ä",
    	applicationProfile: "Š_Application Profile_______ä",
    	name: "Š_Name__ä",
    	description: "Š_Description____ä",
    	sFunction: "Š_Function___ä"
    },
    
    CI_ResponsibleParty: {
    	caption: "Š_Point of Contact______ä",
    	individualName: "Š_Individual Name______ä",
    	organisationName: "Š_Organisation Name______ä",
    	positionName: "Š_Position Name_____ä",
    	contactInfo: "Š_Contact Info_____ä",
    	role: "Š_Role__ä"
    },
    
    CI_RoleCode: {
    	caption: "Š_Role__ä",
    	resourceProvider: "Š_Resource Provider______ä",
    	custodian: "Š_Custodian____ä",
    	owner: "Š_Owner___ä",
    	user: "Š_User__ä",
    	distributor: "Š_Distributor____ä",
    	originator: "Š_Originator____ä",
    	pointOfContact: "Š_Point of Contact______ä",
    	principalInvestigator: "Š_Principal Investigator________ä",
    	processor: "Š_Processor____ä",
    	publisher: "Š_Publisher____ä",
    	author: "Š_Author___ä"
    },
    
    CI_Telephone: {
    	voice: "Š_Voice___ä",
    	facsimile: "Š_Fax__ä"
    },
    
    DCPList: {
    	caption: "Š_DCP__ä",
    	XML: "Š_XML__ä",
    	CORBA: "Š_CORBA___ä",
    	JAVA: "Š_JAVA__ä",
    	COM: "Š_COM__ä",
    	SQL: "Š_SQL__ä",
    	WebServices: "Š_WebServices____ä"
    },
    
    DQ_ConformanceResult: {
    	caption: "Š_Conformance Result______ä",
    	explanation: "Š_Explanation____ä",
    	degree: {
    		caption: "Š_Degree___ä",
    		validationPerformed: "Š_Validation Performed_______ä",
    		conformant: "Š_Conformant____ä",
    		nonConformant: "Š_Non Conformant_____ä"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Š_Report___ä"
    },
    
    DQ_Scope : {
    	level: "Š_Scope (quality information applies to)____________ä",
    	levelDescription: "Š_Level Description______ä"
    },
    
    EX_Extent: {
    	caption: "Š_Extent___ä",
    	description: "Š_Description____ä",
    	geographicElement: "Š_Spatial Extent_____ä",
    	temporalElement: "Š_Temporal Extent______ä",
    	verticalElement: "Š_Vertical Extent______ä"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Š_West Bounding Longitude________ä",
    	eastBoundLongitude: "Š_East Bounding Longitude________ä",
    	southBoundLatitude: "Š_South Bounding Latitude________ä",
    	northBoundLatitude: "Š_North Bounding Latitude________ä"
    },
    
    EX_GeographicDescription: {
    	caption: "Š_Geographic Description________ä"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Š_Begin Date____ä",
    		endPosition: "Š_End Date___ä"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Š_Minimum Value_____ä",
    	maximumValue: "Š_Maximum Value_____ä",
    	verticalCRS: "Š_Vertical CRS_____ä"
    },
    
    Length: {
    	caption: "Š_Length___ä",
    	uom: "Š_Units of Measure______ä",
    	km: "Š_Kilometers____ä",
    	m: "Š_Meters___ä",
    	mi: "Š_Miles___ä",
    	ft: "Š_Feet__ä"
    },
    
    LI_Lineage: {
    	statement: "Š_Lineage Statement______ä"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Š_Browse Graphic URL______ä",
    	fileDescription: "Š_Browse Graphic Caption________ä",
    	fileType: "Š_Browse Graphic Type_______ä"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Š_Unclassified_____ä",
    	restricted: "Š_Restricted____ä",
    	confidential: "Š_Confidential_____ä",
    	secret: "Š_Secret___ä",
    	topSecret: "Š_Top Secret____ä"
    },
    
    MD_Constraints: {
    	caption: "Š_Usage Constraints______ä",
    	useLimitation: "Š_Use Limitation_____ä"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Š_Spatial Representation Type_________ä",
    	spatialResolution: "Š_Spatial Resolution______ä",
    	language: "Š_Resource Language______ä",
    	supplementalInformation: "Š_Supplemental_____ä"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Š_Online___ä"
    },
    
    MD_Distribution: {
    	distributionFormat: "Š_Distribution Format_______ä",
    	transferOptions: "Š_Transfer Options______ä"
    },
    
    MD_Format: {
    	name: "Š_Format Name____ä",
    	version: "Š_Format Version_____ä"
    },
    
    MD_Identifier: {
    	caption: "Š_URI__ä",
    	identifierCaption: "Š_Identifier____ä",
    	code: "Š_Code__ä"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Š_Keywords___ä",
    	thesaurusName: "Š_Associated Thesaurus_______ä"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Š_Keyword Type_____ä",
    	discipline: "Š_Discipline____ä",
    	place: "Š_Place___ä",
    	stratum: "Š_Stratum___ä",
    	temporal: "Š_Temporal___ä",
    	theme: "Š_Theme___ä"
    },
    
    MD_LegalConstraints: {
    	caption: "Š_Legal Constraints______ä",
    	accessConstraints: "Š_Access Constraints______ä",
    	useConstraints: "Š_Use Constraints______ä",
    	otherConstraints: "Š_Other Constraints______ä"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Š_Frequency____ä",
    	continual: "Š_Continual____ä",
    	daily: "Š_Daily___ä",
    	weekly: "Š_Weekly___ä",
    	fortnightly: "Š_Fortnightly____ä",
    	monthly: "Š_Monthly___ä",
    	quarterly: "Š_Quarterly____ä",
    	biannually: "Š_Biannually____ä",
    	annually: "Š_Annually___ä",
    	asNeeded: "Š_As Needed____ä",
    	irregular: "Š_Irregular____ä",
    	notPlanned: "Š_Not Planned____ä",
    	unknown: "Š_Unknown___ä"
    },
    
    MD_Metadata: {
    	caption: "Š_Metadata___ä",
    	fileIdentifier: "Š_File Identifier______ä",
    	language: "Š_Metadata Language______ä",
    	hierarchyLevel: "Š_Hierarchy Level______ä",
    	hierarchyLevelName: "Š_Hierarchy Level Name_______ä",
    	contact: "Š_Metadata Contact______ä",
    	dateStamp: "Š_Metadata Date_____ä",
    	metadataStandardName: "Š_Metadata Standard Name________ä",
    	metadataStandardVersion: "Š_Metadata Standard Version_________ä",
    	referenceSystemInfo: "Š_Reference System______ä",
    	identificationInfo: "Š_Identification_____ä",
    	distributionInfo: "Š_Distribution_____ä",
    	dataQualityInfo: "Š_Quality___ä"
    },
    
    MD_ProgressCode: {
    	caption: "Š_Progress Code_____ä",
    	completed: "Š_Completed____ä",
    	historicalArchive: "Š_Historical Archive______ä",
    	obsolete: "Š_Obsolete___ä",
    	onGoing: "Š_On Going___ä",
    	planned: "Š_Planned___ä",
    	required: "Š_Required___ä",
    	underDevelopment: "Š_Under Development______ä"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Š_Denominator____ä"
    },
    
    MD_Resolution: {
    	equivalentScale: "Š_Equivalent Scale______ä",
    	distance: "Š_Distance___ä"
    },
    
    MD_RestrictionCode: {
    	copyright: "Š_Copyright____ä",
    	patent: "Š_Patent___ä",
    	patentPending: "Š_Patent Pending_____ä",
    	trademark: "Š_Trademark____ä",
    	license: "Š_License___ä",
    	intellectualPropertyRights: "Š_Intellectual Property Rights_________ä",
    	restricted: "Š_Restricted____ä",
    	otherRestrictions: "Š_Other Restrictions______ä"
    },
    
    MD_ScopeCode: {
    	attribute: "Š_Attribute____ä",
    	attributeType: "Š_Attribute type_____ä",
    	collectionHardware: "Š_Collection hardware_______ä",
    	collectionSession: "Š_Collection session______ä",
    	dataset: "Š_Dataset___ä",
    	series: "Š_Series___ä",
    	nonGeographicDataset: "Š_Non geographic dataset________ä",
    	dimensionGroup: "Š_Dimension group______ä",
    	feature: "Š_Feature___ä",
    	featureType: "Š_Feature type_____ä",
    	propertyType: "Š_Property type_____ä",
    	fieldSession: "Š_Field session_____ä",
    	software: "Š_Software___ä",
    	service: "Š_Service___ä",
    	model: "Š_Model___ä",
    	tile: "Š_Tile__ä"
    },
    
    MD_ScopeDescription: {
    	attributes: "Š_Attributes____ä",
    	features: "Š_Features___ä",
    	featureInstances: "Š_Feature Instances______ä",
    	attributeInstances: "Š_Attribute Instances_______ä",
    	dataset: "Š_Dataset___ä",
    	other: "Š_Other___ä"
    },
    
    MD_SecurityConstraints: {
    	caption: "Š_Security Constraints_______ä",
    	classification: "Š_Classification_____ä",
    	userNote: "Š_User Note____ä",
    	classificationSystem: "Š_Classification System_______ä",
    	handlingDescription: "Š_Handling Description_______ä"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Š_Spatial Representation Type_________ä",
    	vector: "Š_Vector___ä",
    	grid: "Š_Grid__ä",
    	textTable: "Š_Text Table____ä",
    	tin: "Š_TIN__ä",
    	stereoModel: "Š_Stereo Model_____ä",
    	video: "Š_Video___ä"
    },
    
    MD_TopicCategoryCode: {
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
    
    MI_ContextCode: {
    	caption: "Š_Context___ä",
    	acquisition: "Š_Acquisition____ä",
    	pass: "Š_Pass__ä",
    	wayPoint: "Š_Waypoint___ä"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Š_Environmental Conditions________ä",
    	averageAirTemperature: "Š_Average Air Temperature________ä",
    	maxRelativeHumidity: "Š_Maximum Relative Humidity_________ä",
    	maxAltitude: "Š_Maximum Altitude______ä",
    	meterologicalConditions: "Š_Meterological Conditions________ä"
    },
    
    MI_Event: {
    	identifier: "Š_Event Identifier______ä",
    	time: "Š_Time__ä",
    	expectedObjectiveReference: "Š_Expected Objective (Objective Identifer)_____________ä",
    	relatedSensorReference: "Š_Related Sensor (Instrument Identifer)____________ä",
    	relatedPassReference: "Š_Related Pass (Platform Pass Identifer)____________ä"
    },

    MI_GeometryTypeCode: {
    	point: "Š_Point___ä",
    	linear: "Š_Linear___ä",
    	areal: "Š_Areal___ä",
    	strip: "Š_Strip___ä"
    },
    
    MI_Instrument: {
    	citation: "Š_Instrument Citation_______ä",
    	identifier: "Š_Instrument Identifier_______ä",
    	sType: "Š_Instrument Type______ä",
    	description: "Š_Instrument Description________ä",
    	mountedOn: "Š_Mounted On____ä",
    	mountedOnPlatformReference: "Š_Mounted On (Platform Identifier)___________ä"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Š_Acquisition____ä"
    },
    
    MI_Objective: {
    	caption: "Š_Objective____ä",
    	identifier: "Š_Objective Identifier_______ä",
    	priority: "Š_Priority of Target______ä",
    	sFunction: "Š_Function of Objective_______ä",
    	extent: "Š_Extent___ä",
    	pass: "Š_Platform Pass_____ä",
    	sensingInstrumentReference: "Š_Sensing Instrument (Instrument Identifier)______________ä",
    	objectiveOccurrence: "Š_Events___ä",
    	sections: {
    		identification: "Š_Identification_____ä",
    		extent: "Š_Extent___ä",
    		pass: "Š_Pass__ä",
    		sensingInstrument: "Š_Sensing Instrument______ä",
    		objectiveOccurrence: "Š_Events___ä"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Š_Type (Collection Technique for Objective)_____________ä",
    	instantaneousCollection: "Š_Instantaneous Collection________ä",
    	persistentView: "Š_Persistent View______ä",
    	survey: "Š_Survey___ä"
    },
    
    MI_Operation: {
    	caption: "Š_Operation____ä",
    	description: "Š_Operation Description_______ä",
    	citation: "Š_Operation Citation______ä",
    	identifier: "Š_Operation Identifier_______ä",
    	status: "Š_Operation Status______ä",
    	objectiveReference: "Š_Related Objective (Objective Identifier)_____________ä",
    	planReference: "Š_Related Plan (Plan Identifier)__________ä",
    	significantEventReference: "Š_Related Event (Event Identifier)___________ä",
    	platformReference: "Š_Related Platform (Platform Identifier)____________ä",
    	sections: {
    		identification: "Š_Identification_____ä",
    		related: "Š_Related___ä"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Š_Operation Type_____ä",
    	real: "Š_Real__ä",
    	simulated: "Š_Simulated____ä",
    	synthesized: "Š_Synthesized____ä"
    },
    
    MI_Plan: {
    	sType: "Š_Sampling Geometry for Collecting Data____________ä",
    	status: "Š_Status of Plan_____ä",
    	citation: "Š_Citation of Authority Requesting Collection______________ä",
    	satisfiedRequirementReference: "Š_Satisfied Requirement (Requirement Identifier)_______________ä",
    	operationReference: "Š_Related Operation (Operation Identifier)_____________ä"
    },
    
    MI_Platform: {
    	citation: "Š_Platform Citation______ä",
    	identifier: "Š_Platform Identifier_______ä",
    	description: "Š_Description of Platform Supporting the Instrument________________ä",
    	sponsor: "Š_Sponsor Organization for Platform___________ä",
    	instrument: "Š_Instrument(s) mounted on the platform____________ä",
    	instrumentReference: "Š_Instrument Identifier_______ä",
    	sections: {
    		identification: "Š_Identification_____ä",
    		sponsor: "Š_Sponsor___ä",
    		instruments: "Š_Instruments____ä"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Š_Platform Pass Identifier________ä",
    	extent: "Š_Platform Pass Extent_______ä",
    	relatedEventReference: "Š_Related Event (Event Identifer)__________ä"
    },

    MI_PriorityCode: {
    	critical: "Š_Critical___ä", 
    	highImportance: "Š_High Importance______ä",
    	mediumImportance: "Š_Medium Importance______ä",
    	lowImportance: "Š_Low Importance_____ä"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Š_Requested Date Of Collection_________ä",
    	latestAcceptableDate: "Š_Latest Acceptable Date________ä"
    },
    
    MI_Requirement: {
    	caption: "Š_Requirement____ä",
    	citation: "Š_Citation for Requirement Guidance Material______________ä",
    	identifier: "Š_Requirement Identifier________ä",
    	requestor: "Š_Requestor of Requirement________ä",
    	recipient: "Š_Recipient of Requirement Results___________ä",
    	priority: "Š_Requirement Priority_______ä",
    	requestedDate: "Š_Requested Date_____ä",
    	expiryDate: "Š_Expiry Date____ä",
    	satisifiedPlanReference: "Š_Satisfied Plan (Plan Identifier)___________ä",
    	sections: {
    		identification: "Š_Identification_____ä",
    		requestor: "Š_Requestor____ä",
    		recipient: "Š_Recipient____ä",
    		priorityAndDates: "Š_Priority And Dates______ä",
    		satisifiedPlan: "Š_Satisified  Plan______ä"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Š_Sequence___ä",
    	start: "Š_Start___ä",
    	end: "Š_End__ä",
    	instantaneous: "Š_Instantaneous_____ä"
    },
    
    MI_TriggerCode: {
    	caption: "Š_Trigger___ä",
    	automatic: "Š_Automatic____ä",
    	manual: "Š_Manual___ä",
    	preProgrammed: "Š_Preprogrammed_____ä"
    },
    
    ObjectReference: {
    	uuidref: "Š_UUID Reference_____ä",
    	xlinkref: "Š_URL Reference_____ä"
    },
    
    RS_Identifier: {
    	caption: "Š_ID Plus Code Space______ä",
    	code: "Š_Code__ä",
    	codeSpace: "Š_Code Space____ä"
    },
    
    SV_CouplingType: {
    	loose: "Š_Loose___ä",
    	mixed: "Š_Mixed___ä",
    	tight: "Š_Tight___ä"
    },
    
    SV_OperationMetadata: {
    	operationName: "Š_Operation Name_____ä",
    	DCP: "Š_DCP__ä",
    	connectPoint: "Š_Connect Point_____ä"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Š_ServiceType____ä",
    	couplingType: "Š_Coupling Type_____ä",
    	containsOperations: "Š_Operation Metadata______ä",
    	operatesOn: "Š_Operates On____ä"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Š_Indeterminate Position________ä",
    	indeterminates: {
    		before: "Š_Before___ä",
       	after: "Š_After___ä",
      	now: "Š_Now__ä",
      	unknown: "Š_Unknown___ä"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Š_GEMET Concept Keyword_______ä",
    		tool: "Š_Look Up____ä...",
    		dialogTitle: "Š_GEMET - Concept Keyword________ä",
    		searchLabel: "Š_Search___ä:",
    		searchTip: "Š_Search GEMET_____ä"
    	},
    	theme: {
    		tool: "Š_Look Up____ä...",
    		dialogTitle: "Š_GEMET - Inspire Data Theme_________ä"
    	},
    	ioerror: "Š_There was an error communicating with the GEMET service: {url}____________________ä",
    	searching: "Š_Searching GEMET______ä...",
    	noMatch: "Š_No matching results were found__________ä.",
      languages: {
      	"bg": "Š_Bulgarian____ä",
      	"cs": "Š_Czech___ä",
      	"da": "Š_Danish___ä",
      	"nl": "Š_Dutch___ä",
      	"en": "Š_English___ä",
      	"et": "Š_Estonian___ä",
      	"fi": "Š_Finnish___ä",
      	"fr": "Š_French___ä",
      	"de": "Š_German___ä",
      	"el": "Š_Greek___ä",
      	"hu": "Š_Hungarian____ä",
      	"ga": "Š_Gaelic (Irish)_____ä",
      	"it": "Š_Italian___ä",
      	"lv": "Š_Latvian___ä",
      	"lt": "Š_Lithuanian____ä",
      	"mt": "Š_Maltese___ä",
      	"pl": "Š_Polish___ä", 
      	"pt": "Š_Portuguese____ä",
      	"ro": "Š_Romanian___ä",
      	"sk": "Š_Slovak___ä",
      	"sl": "Š_Slovenian____ä",  	
      	"es": "Š_Spanish___ä",
      	"sv": "Š_Swedish___ä"
      }
    }
   
  })
);
