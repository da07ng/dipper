define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "須_FGDC__鷗",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "須_None__鷗",
    	notComplete: "須_Not complete_____鷗",
    	other: "須_Other___鷗",
    	present: "須_Present___鷗",
    	unknown: "須_Unknown___鷗",
    	unpublishedMaterial: "須_Unpublished material_______鷗"
    },
    
    hints: {
    	integerGreaterThanOne: "須_(enter an integer > 1)________鷗",
    	integer0To100: "須_(enter an integer 0..100)_________鷗"
    },
    
    citeinfo: {
    	caption: "須_Citation Information_______鷗",
    	origin: "須_Originator____鷗",
    	pubdate: "須_Publication Date______鷗",
    	pubtime: "須_Publication Time______鷗",
    	title: "須_Title___鷗",
    	edition: "須_Edition___鷗",
    	geoform: {
    		caption: "須_Geospatial Data Presentation Form___________鷗",
    		atlas: "須_Atlas___鷗",
    		audio: "須_Audio___鷗",
    		diagram: "須_Diagram___鷗",
    		sDocument: "須_Document___鷗",
    		globe: "須_Globe___鷗",
    		map: "須_Map__鷗",
    		model: "須_Model___鷗",
    		multiMediaPresentation: "須_Multimedia presentation________鷗",
    		profile: "須_Profile___鷗",
    		rasterDigitalData: "須_Raster digital data_______鷗",
    		remoteSensingImage: "須_Remote-sensing image_______鷗",
    		section: "須_Section___鷗",
    		spreadsheet: "須_Spreadsheet____鷗",
    		tabularDigitalData: "須_Tabular digital data_______鷗",
    		vectorDigitalData: "須_Vector digital data_______鷗",
    		video: "須_Video___鷗",
    		view: "須_View__鷗"
    	},
    	serinfo: {
    		caption: "須_Series Information______鷗",
    		sername: "須_Series Name____鷗",
    		issue: "須_Issue Identification_______鷗"
    	},
    	pubinfo: {
    		caption: "須_Publication Information________鷗",
    		pubplace: "須_Publication Place______鷗",
    		publish: "須_Publisher____鷗"
    	},
    	othercit: "須_Other Citation Details________鷗",
    	onlink: "須_Online Linkage (URL)_______鷗"
    },
    
    cntinfo: {
    	caption: "須_Contact Information_______鷗",
    	section: {
    		primary: "須_Primary___鷗",
    		phoneAndEmail: "須_Phone and E-Mail______鷗",
    		hoursAndInstructions: "須_Hours and Instructions________鷗"
    	},
    	cntorgp: {
    		caption: "須_By organization______鷗",
    		cntorg: "須_Organization_____鷗",
    		cntper: "須_Person___鷗"
    	},
    	cntperp: {
    		caption: "須_By person____鷗",
    		cntper: "須_Person___鷗",
    		cntorg: "須_Organization_____鷗"
    	},
    	cntpos: "須_Position___鷗",
    	cntaddr: {
    		caption: "須_Address___鷗",
    		addrtype: {
    			caption: "須_Address Type_____鷗",
    			mailing: "須_Mailing___鷗",
    			physical: "須_Physical___鷗",
    			mailingAndPhysical: "須_Mailing and Physical_______鷗"
    		},
    		address: "須_Address___鷗",
    		city: "須_City__鷗",
    		state: "須_State___鷗",
    		postal: "須_Postal Code____鷗",
    		country: "須_Country___鷗"
    	},
    	cntvoice: "須_Voice___鷗",
    	cnttdd: "須_TDD/TTY Telephone (hearing impaired)____________鷗",
    	cntfax: "須_Fax__鷗",
    	cntemail: "須_E-Mail Address_____鷗",
    	hours: "須_Hours___鷗",
    	cntinst: "須_Instructions_____鷗"
    },
    
    dataqual: {
    	caption: "須_Data Quality Information________鷗",
    	section: {
    		attributeAccuracy: "須_Attribute Accuracy______鷗",
    		logicalConsistency: "須_Logical Consistency_______鷗",
    		completeness: "須_Completeness_____鷗",
    		positionalAccuracy: "須_Positional Accuracy_______鷗",
    		lineage: "須_Lineage___鷗",
    		cloudCover: "須_Cloud Cover____鷗"
    	},
    	attracc: {
    		caption: "須_Attribute Accuracy______鷗",
    		attraccr: "須_Attribute Accuracy Report_________鷗",
    		qattracc: {
    			caption: "須_Quantitative Attribute Accuracy Assessment______________鷗",
    			attraccv: "須_Attribute Accuracy Value________鷗",
    			attracce: "須_Attribute Accuracy Explanation__________鷗"
    		}
    	},
    	logic: "須_Logical Consistency Report_________鷗",
    	complete: "須_Completeness Report_______鷗",
    	posacc: "須_Positional Accuracy_______鷗",
    	horizpa: {
    		caption: "須_Horizontal Positional Accuracy__________鷗",
    		horizpar: "須_Horizontal Positional Accuracy Report____________鷗",
    		qhorizpa: {
    			caption: "須_Quantitative Horizontal Positional Accuracy Assessment_________________鷗",
    			horizpav: "須_Horizontal Positional Accuracy Value____________鷗",
    			horizpae: "須_Horizontal Positional Accuracy Explanation______________鷗"
    		}
    	},
    	vertacc: {
    		caption: "須_Vertical Positional Accuracy_________鷗",
    		vertaccr: "須_Vertical Positional Accuracy Report____________鷗",
    		qvertpa: {
    			caption: "須_Quantitative Vertical Positional Accuracy Assessment_________________鷗",
    			vertaccv: "須_Vertical Positional Accuracy Value___________鷗",
    			vertacce: "須_Vertical Positional Accuracy Explanation_____________鷗"
    		}
    	},
    	lineage: {
    		caption: "須_Lineage___鷗"
    	},
    	srcinfo: {
    		caption: "須_Source Information______鷗",
    		srccite: "須_Source Citation______鷗",
    		srcscale: "須_Source Scale Denominator________鷗",
    		typesrc: {
    			caption: "須_Type of Source Media_______鷗",
    			paper: "須_Paper___鷗",
    			stableBaseMaterial: "須_Stable-base material_______鷗",
    			microfiche: "須_Microfiche____鷗",
    			microfilm: "須_Microfilm____鷗",
    			audiocassette: "須_Audio cassette_____鷗",
    			chart: "須_Chart___鷗",
    			filmstrip: "須_Film strip____鷗",
    			transparency: "須_Transparency_____鷗",
    			videocassette: "須_Video cassette_____鷗",
    			videodisc: "須_Video disc____鷗",
    			videotape: "須_Video tape____鷗",
    			physicalModel: "須_Physical model_____鷗",
    			computerProgram: "須_Computer program______鷗",
    			disc: "須_Disc__鷗",
    			cartridgeTape: "須_Cartridge tape_____鷗",
    			magneticTape: "須_Magnetic tape_____鷗",
    			online: "須_Online___鷗",
    			cdrom: "須_CD-ROM___鷗",
    			electronicBulletinBoard: "須_Electronic bulletin board_________鷗",
    			electronicMailSystem: "須_Electronic mail system________鷗"
    		},
    		srctime: "須_Source Time Period of Content__________鷗",
    		srccurr: "須_Source Currentness Reference_________鷗",
    		srccitea: "須_Source Citation Abbreviation_________鷗",
    		srccontr: "須_Source Contribution_______鷗"
    	},
    	procstep: {
    		caption: "須_Process Step_____鷗",
    		procdesc: "須_Process Description_______鷗",
    		srcused: "須_Source Used Citation Abbreviation___________鷗",
    		procdate: "須_Process Date_____鷗",
    		proctime: "須_Process Time_____鷗",
    		srcprod: "須_Source Produced Citation Abbreviation____________鷗",
    		proccont: "須_Process Contact______鷗"
    	},
    	cloud: "須_Cloud Cover____鷗"
    },
    
    distinfo: {
    	caption: "須_Distribution Information________鷗",
    	section: {
    		distributor: "須_Distributor____鷗",
    		description: "須_Description____鷗",
    		orderProcess: "須_Order Process_____鷗",
    		prerequisites: "須_Prerequisites_____鷗",
    		availability: "須_Availability_____鷗"
    	},
    	distrib: "須_Distributor____鷗",
    	resdesc: {
    		caption: "須_Resource Description_______鷗",
    		liveData: "須_Live Data and Maps______鷗",
    		downloadableData: "須_Downloadable Data______鷗",
    		offlineData: "須_Offline Data_____鷗",
    		staticMapImages: "須_Static Map Images______鷗",
    		sDocument: "須_Other Documents______鷗",
    		application: "須_Applications_____鷗",
    		geographicService: "須_Geographic Services_______鷗",
    		clearingHouse: "須_Clearinghouses_____鷗",
    		mapFiles: "須_Map Files____鷗",
    		geographicActivies: "須_Geographic Activities_______鷗"
    	},
    	distliab: "須_Distribution Liability Statement___________鷗",
    	custom: "須_Custom Order Process_______鷗",
    	techpreq: "須_Technical Prerequisites________鷗",
    	availabl: "須_Availability_____鷗"
    },
    
    eainfo: {
    	caption: "須_Entity and Attribute Information___________鷗",
    	overview: "須_Overview Description_______鷗",
    	eaover: "須_Entity and Attribute Overview__________鷗",
    	eadetcit: "須_Entity and Attribute Detail Citation____________鷗"
    },
    
    idinfo: {
    	caption: "須_Identification Information_________鷗",
    	section: {
    		timeAndStatus: "須_Time and Status______鷗",
    		constraints: "須_Constraints____鷗",
    		contact: "須_Contact___鷗",
    		additional: "須_Additional____鷗"
    	},
    	citeinfo: "須_Citation___鷗",
    	descript: {
    		caption: "須_Description____鷗",
    		sAbstract: "須_Abstract___鷗",
    		purpose: "須_Purpose___鷗",
    		supplinf: "須_Supplemental Information________鷗"
    	},
    	timeperd: {
    		caption: "須_Time Period of Content________鷗",
    		current: {
    			caption: "須_Currentness Reference_______鷗",
    			groundCondition: "須_Ground Condition______鷗",
    			publicationDate: "須_Publication Date______鷗"
    		}
    	},
    	status: {
    		caption: "須_Status___鷗",
    		progress: {
    			caption: "須_Progress___鷗",
     			complete: "須_Complete___鷗",
    			inWork: "須_In work___鷗",
    			planned: "須_Planned___鷗"
    		},
    		update: {
    			caption: "須_Maintenance and Update Frequency___________鷗",
    			continual: "須_Continual____鷗",
    			daily: "須_Daily___鷗",
    			weekly: "須_Weekly___鷗",
    			monthly: "須_Monthly___鷗",
    			annually: "須_Annually___鷗",
    			unknown: "須_Unknown___鷗",
    			asNeeded: "須_As needed____鷗",
    			irregular: "須_Irregular____鷗",
    			nonePlanned: "須_None planned_____鷗"
    		}
    	},
    	spdom: {
    		caption: "須_Extent___鷗",
    		bounding: {
    			caption: "須_Bounding Coordinates_______鷗",
    			westbc: "須_West Bounding Longitude________鷗",
    			eastbc: "須_East Bounding Longitude________鷗",
    			northbc: "須_North Bounding Latitude________鷗",
    			southbc: "須_South Bounding Latitude________鷗"
    		}
    	},
      keywords: {
        caption: "キーワード（Keywords）",
        theme: "テーマ",
        place: "場所",
        stratum: "層",
        temporal: "テンポラル",
        thesaursus: "関連シソーラス",
        delimited: "キーワード（Keywords）",
        themektIsoTopicCategory: "ISO トピック...",
        themektIsoTopicDialog: "ISO トピック",
        placektGnis: "地名情報システム"
      },
      accconst: "アクセス制限",
      useconst: "利用制限",
      ptcontac: "情報資源の問い合わせ先",
      browse: {
      	caption: "須_Browse Graphic_____鷗",
      	browsen: "須_Browse Graphic URL______鷗",
      	browsed: "須_Browse Graphic File Description__________鷗",
      	browset: "須_Browse Graphic File Type________鷗"
      },
      datacred: "データ集合著作権",
      secinfo: {
      	caption: "須_Security Information_______鷗",
      	secsys: "須_Security Classification System__________鷗",
      	secclass: {
      		caption: "須_Security Classification________鷗",
      		topSecret: "須_Top secret____鷗",
      		secret: "須_Secret___鷗",
      		confidential: "須_Confidential_____鷗",
      		restricted: "須_Restricted____鷗",
      		unclassified: "須_Unclassified_____鷗",
      		sensitive: "須_Sensitive____鷗"
      	},
      	sechandl: "須_Security Handling Description__________鷗"
      },
      sNative: "ネイティブ データ集合環境",
      crossref: "対照表"
    },
    
    metadata: {
    	idinfo: "須_Identification_____鷗",
    	dataqual: "須_Quality___鷗",
    	spdoinfo: "須_Spatial Data Organization_________鷗",
    	spref: "須_Spatial Reference______鷗",
    	eainfo: "須_Entity and Attribute_______鷗",
    	distinfo: "須_Distribution_____鷗",
    	metainfo: "須_Metadata___鷗"
    },
    
    metainfo: {
    	caption: "須_Metadata Information_______鷗",
    	section: {
    		dates: "須_Metadata Dates_____鷗",
    		contact: "須_Metadata Contact______鷗",
    		standard: "須_Metadata Standard______鷗",
    		additional: "須_Additional____鷗"
    	},
      metd: "メタデータの更新日",
      metrd: "メタデータ レビュー実施日",
      metfrd: "メタデータ レビュー予定日",
      metstdn: "メタデータの標準名",
      metstdv: "メタデータ標準バージョン",
      metac: "メタデータへのアクセス制限",
      metuc: "メタデータ利用制限",
      metsi: {
      	caption: "須_Metadata Security Information__________鷗",
      	metscs: "須_Metadata Security Classification System_____________鷗",
      	metsc: "須_Metadata Security Classification___________鷗",
      	metshd: "須_Metadata Security Handling Description____________鷗"
      }
    },
    
    spref: {
    	caption: "須_Spatial Reference Information__________鷗",
    	horizsys: {
    		caption: "須_Horizontal Coordinate System_________鷗",
    		geograph: {
    			caption: "須_Geographic____鷗",
    			latres: "須_Latitude Resolution_______鷗",
    			longres: "須_Longitude Resolution_______鷗",
    			geogunit: {
    				caption: "須_Geographic Coordinate Units_________鷗",
    				decimalDegrees: "須_Decimal degrees______鷗",
    				decimalMinutes: "須_Decimal minutes______鷗",
    				decimalSeconds: "須_Decimal seconds______鷗",
    				degreesAndDecimalMinutes: "須_Degrees and decimal minutes_________鷗",
    				degreesMinutesAndDecimalSeconds: "須_Degrees, minutes, and decimal seconds____________鷗",
    				radians: "須_Radians___鷗",
    				grads: "須_Grads___鷗"
    			}
    		},
    		planar: {
    			caption: "須_Planar___鷗"
    		},
    		local: {
    			caption: "須_Local___鷗",
    			localdes: "須_Local Description______鷗",
    			localgeo: "須_Local Georeference Information__________鷗"
    		},
    		geodetic: {
    			caption: "須_Geodetic Model_____鷗",
    			horizdn: {
    				caption: "須_Horizontal Datum Name_______鷗",
    				nad83: "須_North American Datum of 1983_________鷗",
    				nad27: "須_North American Datum of 1927_________鷗"
    			},
    			ellips: {
    				caption: "須_Ellipsoid Name_____鷗",
    				grs80: "須_Geodetic Reference System 80_________鷗",
    				clarke1866: "須_Clarke 1866____鷗"
    			},
    			semiaxis: "須_Semi-major Axis______鷗",
    			denflat: "須_Denominator of Flattening Ratio__________鷗"
    		}
    	},
    	vertdef: {
    		caption: "須_Vertical Coordinate System_________鷗",
    		altsys: {
    			caption: "須_Altitude System______鷗",
    			altdatum: {
    				caption: "須_Altitude Datum Name_______鷗",
    				navd88: "須_North American Vertical Datum of 1988____________鷗",
    				ngvd29: "須_National Geodetic Vertical Datum of 1929_____________鷗"
    			},
    			altres: "須_Altitude Resolution_______鷗",
    			altunits: {
    				caption: "須_Altitude Distance Units________鷗",
    				meters: "須_Meters___鷗",
    				feet: "須_Feet__鷗"
    			},
    			altenc: {
    				caption: "須_Altitude Encoding Method________鷗",
    				explicit: "須_Explicit elevation coordinate included with horizontal coordinates_____________________鷗",
    				implicit: "須_Implicit coordinate_______鷗",
    				attribute: "須_Attribute values______鷗"
    			}
    		},
    		depthsys: {
    			caption: "須_Depth System_____鷗",
    			depthdn: {
    				caption: "須_Depth Datum Name______鷗",
    				option1: "須_Local surface_____鷗", 
    				option2: "須_Chart datum; datum for sounding reduction_____________鷗", 
    				option3: "須_Lowest astronomical tide________鷗", 
    				option4: "須_Highest astronomical tide_________鷗", 
    				option5: "須_Mean low water_____鷗", 
    				option6: "須_Mean high water______鷗", 
    				option7: "須_Mean sea level_____鷗", 
    				option8: "須_Land survey datum______鷗", 
    				option9: "須_Mean low water springs________鷗", 
    				option10: "須_Mean high water springs________鷗", 
    				option11: "須_Mean low water neap_______鷗", 
    				option12: "須_Mean high water neap_______鷗", 
    				option13: "須_Mean lower low water_______鷗", 
    				option14: "須_Mean lower low water springs_________鷗", 
    				option15: "須_Mean higher high water________鷗", 
    				option16: "須_Mean higher low water_______鷗", 
    				option17: "須_Mean lower high water_______鷗", 
    				option18: "須_Spring tide____鷗", 
    				option19: "須_Tropic lower low water________鷗", 
    				option20: "須_Neap tide____鷗", 
    				option21: "須_High water____鷗", 
    				option22: "須_Higher high water______鷗", 
    				option23: "須_Low water____鷗", 
    				option24: "須_Low-water datum______鷗", 
    				option25: "須_Lowest low water______鷗", 
    				option26: "須_Lower low water______鷗", 
    				option27: "須_Lowest normal low water________鷗", 
    				option28: "須_Mean tide level______鷗", 
    				option29: "須_Indian spring low water________鷗", 
    				option30: "須_High-water full and charge_________鷗", 
    				option31: "須_Low-water full and charge_________鷗", 
    				option32: "須_Columbia River datum_______鷗", 
    				option33: "須_Gulf Coast low water datum_________鷗", 
    				option34: "須_Equatorial springs low water_________鷗", 
    				option35: "須_Approximate lowest astronomical tide____________鷗", 
    				option36: "須_No correction_____鷗"
    			},
    			depthres: "須_Depth Resolution______鷗",
    			depthdu: {
    				caption: "須_Depth Distance Units_______鷗",
    				meters: "須_Meters___鷗",
    				feet: "須_Feet__鷗"
    			},   			
    			depthem: {
    				caption: "須_Depth Encoding Method_______鷗",
    				explicit: "須_Explicit depth coordinate included with horizontal coordinates____________________鷗",
    				implicit: "須_Implicit coordinate_______鷗",
    				attribute: "須_Attribute values______鷗"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "須_Time Period Information________鷗",
    	sngdate: "須_Single Date____鷗",
    	mdattim: "須_Multiple Dates_____鷗",
    	rngdates: "須_Date Range____鷗",
    	caldate: "須_Date__鷗",
    	time: "須_Time__鷗",
    	begdate: "須_Beginning Date_____鷗",
    	begtime: "須_Beginning Time_____鷗",
    	enddate: "須_Ending Date____鷗",
    	endtime: "須_Ending Time____鷗"
    }
   
  })
);
